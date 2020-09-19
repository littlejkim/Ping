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

function roomCreate(roomId, roomTitle, memberCount) {
  database()
    .ref(`/Rooms/${roomId}`)
    .set(
      {
        roomTitle: roomTitle,
        memberCount: memberCount,
      },
      () => {
        return console.log('roomCreate complete: ' + true);
      },
    );
}

export {getNextRoomId, roomCreate};
