import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
async function testSet() {
  var instance = await iid().get();
  database()
    .ref(`/test/${instance}`)
    .set({
      menu: "mom's spaghetti",
      priceLow: 5000,
      priceHigh: 20000,
      distanceLow: 1,
      distanceHigh: 3,
      objtest: {
        asdf: 'asdf',
        'asdlf;kj': 'asdlk;fj',
        qwepoiru: 'qwoeipur',
      },
    });
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

function testRT(){
  return new Promise(async (resolve, reject) => {
    database()
      .ref(`/test`)
      .on('value', snapshot => {
        resolve(JSON.stringify(snapshot.toJSON()));
      });
  });
};

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
export {testSet, testGet, testRT};
