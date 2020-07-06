import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomFooterButton';
import database from '@react-native-firebase/database';

export default function dbtest({navigation}) {
    const[query, setQuery] = useState("");

    function testset(){
        database().ref('/users/123').set({
            name: 'YoungDo',
            age: 26,
          });
          
    }

    function testget(){
        database()
  .ref('/users/123')
  .once('value')
  .then(snapshot => {
    setQuery(JSON.stringify(snapshot.toJSON()));
  });
    }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
  <Text>{query}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'set'}
          onPress={() => testset()}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'get'}
          onPress={() => testget()}
        />
      </View>
    </View>
  );
}
