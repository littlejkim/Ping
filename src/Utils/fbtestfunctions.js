import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
import dynamicLinks from '@react-native-firebase/dynamic-links';
var rdn;
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
    link: 'https://vote.pls.page.link?room='+ instance,
    // domainUriPrefix is created in your Firebase console
    domainUriPrefix: 'https://votepls.page.link',
    // optional set up which updates Firebase analytics campaign
    // "banner". This also needs setting up before hand
  });

  return link;
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


export {testSet, testGet,testIncre,testDecre,buildLink};
