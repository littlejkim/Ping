import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {testGet, testSet, testRT} from '../utils/fbtestfunctions';

export default function Dbtest({navigation}) {
  const [query, setQuery] = useState('');
  const [realTime, setRealTime] = useState('');
  useEffect(() => {
    const onValueChange = database()
      .ref(`/test`)
      .on('value', snapshot => {
        setRealTime(JSON.stringify(snapshot.val()));
      });
    return () =>
      database()
        .ref(`/test`)
        .off('value', onValueChange);
  }, [realTime]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>set/get = {query}</Text>
        <Text>realTime test = {realTime}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'set'}
          onPress={() => testSet()}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'get'}
          onPress={() => testGet().then(res => setQuery(res))}
        />
      </View>
    </View>
  );
}
