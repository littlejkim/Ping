import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
function testSet() {
  var iid = await iid().get();
  database()
    .ref('/users/123')
    .set({
      name: 'YoungDo',
      age: 26,
      Instance: iid
    });
}

function testGet() {
  return new Promise((resolve, reject) => {
    database()
      .ref('/users/123')
      .once('value')
      .then(snapshot => {
         resolve(JSON.stringify(snapshot.toJSON()));
      });

  })

}

export {testSet, testGet};