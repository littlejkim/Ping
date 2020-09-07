import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useValue} from 'react-native-redash';
import {roomCreate, getNextRoomId} from './dbfunctions';

//build link
async function buildLinkShort(roomTitle, memberCount) {
  var roomId;
  getNextRoomId().then(transaction => {
    //get roomCount from firebase db and increment
    console.log('transaction: ' + JSON.stringify(transaction));
    if (transaction.committed) {
      //if successfully get and increment,
      roomId = transaction.snapshot.val();
      roomCreate(roomId, roomTitle, memberCount); //push room settings to fb database
    }
  });

  //create link with hashed parameters
  const link = await dynamicLinks().buildShortLink({
    link:
      'https://vote.pls.page.link/?roomId=' +
      roomId +
      'roomTitle=' +
      roomTitle +
      '&memberCount=' +
      memberCount, //link parameter. add parameters here
    domainUriPrefix: 'https://votepls.page.link/', //the whole 'link' string will be added as a parameter to this url.
    android: {
      packageName: 'com.ping',
    },
    ios: {
      bundleId: 'com.ping',
    },
  });
  return link; //returns final dynamic link with hashed parameters. users see this link. For example: https://votepls.page.link/bV8SjD8CR1c3dbz29.
  //(See ../Tests/TestFront.js for receiving and parsing dynamic links)
}

//parse url and put parameters in json form
function urlJson(url) {
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
}

//build long link. we only need buildShortLink, but just in case.
async function buildLink() {
  var instance = await iid().get();
  const link = await dynamicLinks().buildLink({
    //builds raw link. For example: https://votepls.page.link/?apn=com.ping&ibi=com.ping&link=https://votepls.page.link/?room=eZyTWcHnRA2XE00JzFpm8a
    link: 'https://vote.pls.page.link/?room=' + instance,
    domainUriPrefix: 'https://votepls.page.link/',
    android: {
      packageName: 'com.ping',
    },
    ios: {
      bundleId: 'com.ping',
    },
  });

  return link;
}
export {buildLinkShort, urlJson};
