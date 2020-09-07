import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useValue} from 'react-native-redash';


function getNextRoomId() {
    const reference = database().ref(`/RoomCount`);
    return reference.transaction(currentCnt => {
      if (currentCnt === null) return 0;
      return currentCnt + 1;
    });
}

function roomCreate(roomId,roomTitle,memberCount) {
    database()
      .ref(`/Rooms/${roomId}`)
      .set({
        roomTitle: roomTitle,
        memberCount: memberCount,
        menu: "mom's spaghetti",
        priceLow: 0,
        priceHigh: 20000,
        distanceLow: 1,
        distanceHigh: 3,
        objtest: {
          asdf: 'asdf',
          'asdlf;kj': 'asdlk;fj',
          qwepoiru: 'qwoeipur',
        },
      }, () => {
        return console.log("roomCreate complete: " + true);
      });
  }

export {
    getNextRoomId,
    roomCreate
}