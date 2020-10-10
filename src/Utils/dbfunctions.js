import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useValue} from 'react-native-redash';

function getNextRoomId() {
  const reference = database().ref(`/RoomCount`);
  return reference.transaction(currentCnt => {
    if (currentCnt === null) {
      return 1;
    }
    return currentCnt + 1;
  });
}

function roomCreate(roomId, roomTitle, maxCount) {
  database()
    .ref(`/Rooms/${roomId}`)
    .set(
      {
        roomTitle: roomTitle,
        size: {
          maxCount: maxCount,
          currentCount: 0,
        },
      },
      () => {
        return console.log('roomCreate complete: ' + true);
      },
    );
}

//-----------------------------------------------------
//투표관련 함수

//이미 해당 방에서 투표했던 사람인가? 1
async function memberExists(roomId) {
  var instance = await iid().get();
  var memberExists;
  database()
    .ref(`/Rooms/${roomId}/votes/${instance}`)
    .once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        memberExists = true;
      } else {
        memberExists = false;
      }
    });
  return memberExists;
}

//방 입장 가능? max 2/min 1. return 0 = enough space can enter. 1 = already voted can enter. 2 = not enough space cannot enter
async function enterRoomCheck(roomId) {
  var memberExistsFlag = await memberExists(roomId);

  //처음 오는 방이면, 인원수체크 후 인원수제한에 걸리면 입장 불가
  if (!memberExistsFlag) {
    database()
      .ref(`/Rooms/${roomId}/size`)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists) {
          var size = snapshot.val();
          if (size.currentCount >= size.maxCount) {
            return 2;
          } else {
            return 0;
          }
        } else {
          return new Error('roomId does not exist');
        }
      });
  } else {
    //이미 이전에 투표했던 사람이면 입장 가능
    return 1;
  }
}

//투표시 인원체크. 2
//투표시 인원체크 후 투표 가능하면 투표인원 카운트 +1, transmission.committed = true  . 인원 제한에 걸리면 transaction.committed = false
function memberCountCheck(roomId) {
  var reference = database().ref(`/Rooms/${roomId}/size`);
  return reference.transaction(
    size => {
      if (size.currentCount < size.maxCount) {
        return {maxCount: size.maxCount, currentCount: size.currentCount + 1};
      } else {
        return;
      }
    },
    error => {
      if (error) console.log(error);
    },
  );
}

//델타 1
async function getDeltaOBJ(newVote, roomId) {
  var instance = await iid().get();
  var deltaOBJ = {};
  var reference = database().ref(`/Rooms/${roomId}/votes/${instance}`);
  reference.once('value').then(snapshot => {
    if (snapshot.exists) {
      var oldVote = snapshot.val();

      //food delta
      for (var key in newVote.food) {
        if (oldVote.food.hasOwnProperty(key)) {
          delete oldVote.food[key];
        } else {
          deltaOBJ.food[key] = 1;
        }
      }
      for (var key in oldVote.food) {
        deltaOBJ.food[key] = -1;
      }

      //distance delta
      if (newVote.distance != oldVote.distance) {
        deltaOBJ.distance[oldVote.distance] = -1;
        deltaOBJ.distance[newVote.distance] = 1;
      }

      //price delta
      if (newVote.price != oldVote.price) {
        deltaOBJ.price[oldVote.price] = -1;
        deltaOBJ.price[newVote.price] = 1;
      }
    } else {
      for (var key in newVote.food) {
        deltaOBJ.food[key] = 1;
      }
      deltaOBJ.distance[newVote.distance] = 1;
      deltaOBJ.price[newVote.price] = 1;
    }
  });
  console.log('show deltaOBJ: ' + deltaOBJ);
  return deltaOBJ;
}

//투표 push 2
function pushVote(newVote, roomId) {
  var reference = database().ref(`/Rooms/${roomId}/votes/${instance}`);
  reference.set(newVote, error => {
    if (error) console.log(error);
  });
  return console.log('pushVote executed');
}

//투표를 총투표결과에 반영 2
function voteToResult(deltaOBJ, roomId) {
  var reference = database().ref(`/Rooms/${roomId}/result`);
  return reference.transaction(
    results => {
      var newResult = results;
      for (var key in deltaOBJ.food) {
        newResult.food[key] = newResult.food[key] + deltaOBJ.food[key];
      }
      for (var key in deltaOBJ.distance) {
        newResult.distance[key] =
          newResult.distance[key] + deltaOBJ.distance[key];
      }
      for (var key in deltaOBJ.price) {
        newResult.price[key] = newResult.price[key] + deltaOBJ.price[key];
      }
      console.log('new Result: ' + JSON.stringify(newResult));
      return newResult;
    },
    error => {
      if (error) {
        console.log(error);
      }
    },
  );
}

//투표 submit
async function submitVote(roomId, newVote, enterRoomCheckOption) {
  var ableToSubmit;

  if (enterRoomCheckOption == 0) {
    memberCountCheck(roomId).then(transaction => {
      if (transaction.committed) {
        var tmp = transaction.snapshot.val();
        ableToSubmit = true;
        console.log('maxCount: ' + tmp.maxCount);
        console.log('currentCount after increment: ' + tmp.maxCount);
      } else {
        ableToSubmit = false;
      }
    });
  } else if (enterRoomCheckOption == 1) {
    ableToSubmit = true;
  } else {
    return new Error('unknown error');
  }

  if (ableToSubmit) {
    var delta = await getDeltaOBJ(newVote, roomId);
    pushVote(newVote, roomId);
    voteToResult(delta, roomId).then(transaction => {
      console.log(JSON.stringify(transaction));
      console.log('vote applied to result');
    });
  } else {
    return new Error('not able to submit');
  }
}
export {getNextRoomId, roomCreate, submitVote, enterRoomCheck};
