import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {testGet, testSet, testIncre, testDecre} from '../Utils/fbtestfunctions';

export default function Dbtest({navigation}) {
  // const [query, setQuery] = useState('');
  const [realTime, setRealTime] = useState('');
  useEffect(() => {
    const onValueChange = database()
      .ref(`/test/count`)
      .on('value', snapshot => {
        setRealTime(JSON.stringify(snapshot.val()));
      });
    return () =>
      database()
        .ref(`/test/count`)
        .off('value', onValueChange);
  }, [realTime]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Text>set/get = {query}</Text> */}
        <Text>realTimeDB transaction test count = {realTime}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'incre'}
          onPress={() => testIncre()}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'decre'}
          onPress={() => testDecre()}
        />
      </View>
    </View>
  );
}
