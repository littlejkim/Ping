import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import SHA256 from 'crypto-js/sha256';
import { useValue } from 'react-native-redash';;

async function testSet() {
  var instance = await iid().get();
  var rand = Math.floor(Math.random() * Math.floor(100));
  database()
    .ref(`/test/${rand}`)
    .set({
      menu: "mom's spaghetti",
      priceLow: rand,
      priceHigh: 20000,
      distanceLow: 1,
      distanceHigh: 3,
      objtest: {
        asdf: 'asdf',
        'asdlf;kj': 'asdlk;fj',
        qwepoiru: 'qwoeipur',
      },
    });
    rdn = rand;
}

function testGet() {
  return new Promise(async (resolve, reject) => {
    var instance = await iid().get();
    database()
      .ref(`/test/${instance}`)
      .once('value')
      .then(snapshot => {
        resolve(JSON.stringify(snapshot.toJSON()));
      });
  });
}

function testIncre(){
  const reference = database().ref(`/test/count`);
  return reference.transaction(currentCnt => {
    if (currentCnt === null) return 1;
    return currentCnt + 1;
  });
}
function testDecre(){
  const reference = database().ref(`/test/count`);
  return reference.transaction(currentCnt => {
    if (currentCnt !== null && currentCnt>0) return currentCnt-1;
    return 0;
  });
}

async function buildLink() {
  var instance = await iid().get();
  const link = await dynamicLinks().buildLink({
    link: 'https://vote.pls.page.link/?room='+ instance,
    domainUriPrefix: 'https://votepls.page.link/',
    android:{
      packageName:'com.ping'
    },
    ios: {
      bundleId: 'com.ping'
    }
  });

  return link;
}

async function buildLinkShort() {
  var instance = await iid().get();
  var hash = SHA256(Date.now().toString());
  const link = await dynamicLinks().buildShortLink({
    link: 'https://vote.pls.page.link/?room='+ instance+"&h="+hash,
    domainUriPrefix: 'https://votepls.page.link/',
    android:{
      packageName:'com.ping'
    },
    ios: {
      bundleId: 'com.ping'
    }
  });

  return link;
}

function parseUrl(url){
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
  params = {},
  match
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2]
  }
  return params;
}

function parseTransY(transY,length){
  let x = transY-200;
  if(x > 0){
    return 0;
  } else{
    x *= -1;
    if(Math.round(x/100) > length-1){
      return length-1;
    }
    return Math.round(x/100);
  }




  // switch (true) {
  //   case (transY>=151):
  //     return 0;
  //     break;
  //   case (transY<=150 && transY>=51):
  //     return 1;
  //     break;
  //   case (transY<=50 && transY>=-49):
  //     return 2;
  //     break;
  //   case (transY<=-50 && transY>=-149):
  //     return 3;
  //     break;
  //   case (transY<=-150 && transY>=-249):
  //     return 4;
  //     break;
  //   case (transY<=-250 && transY>=-349):
  //     return 5;
  //     break;
  //   case (transY <=-350):
  //     return 6;
  //     break;
  //   default:
  //     break;
  // }
}
// When post "567" is liked
// onPostLike('567').then(transaction => {
//   console.log('New post like count: ', transaction.snapshot.val());
    
// }
// function testRT(){
//   return new Promise(async (resolve, reject) => {
//     database()
//       .ref(`/test`)
//       .on('value', snapshot => {
//         resolve(JSON.stringify(snapshot.toJSON()));
//       });
      
//   });
// };

/* Room:
    title:,
    menus:{
      menu1:counts,
      menu2:counts,
      menu3:counts,
      ...
    },
    priceLow:,
    priceHigh:,
    distLow:,
    distHigh:,
    voters:{
      voter1:{
        menu:,
        vPriceLow:,
        vPriceHigh:,
        vDistLow:,
        vDistHigh:
      }
      voter2:{
        menu:,
        vPriceLow:,
        vPriceHigh:,
        vDistLow:,
        vDistHigh:
      }
      voter3:{
        menu:,
        vPriceLow:,
        vPriceHigh:,
        vDistLow:,
        vDistHigh:
      }
    }

    */
//https://votepls.page.link/?link=https://votepls.page.link/?room=eZyTWcHnRA2XE00JzFpm8a&apn=com.ping
//https://votepls.page.link/?apn=com.ping&ibi=com.ping&link=https://votepls.page.link/?room=eZyTWcHnRA2XE00JzFpm8a
//https://votepls.page.link/LLqDPB4qFHFJTeKX9
//https://votepls.page.link/prUQmP4nH5VgStrj6
//https://votepls.page.link/bV8SjD8CR1c3dbz29
export {testSet, testGet,testIncre,testDecre,buildLink,parseUrl,buildLinkShort,parseTransY};
