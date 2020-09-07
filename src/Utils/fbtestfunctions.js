import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';

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
  const rdn = rand;
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

function testIncre() {
  const reference = database().ref(`/test/count`);
  return reference.transaction(currentCnt => {
    if (currentCnt === null) return 1;
    return currentCnt + 1;
  });
}
function testDecre() {
  const reference = database().ref(`/test/count`);
  return reference.transaction(currentCnt => {
    if (currentCnt !== null && currentCnt > 0) return currentCnt - 1;
    return 0;
  });
}

//See ../Tests/Dbtest2.js for Realtime listening

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
export {testSet, testGet, testIncre, testDecre};
