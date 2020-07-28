import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {testGet, testSet, testIncre, testDecre,buildLink,parseUrl} from '../utils/fbtestfunctions';
export default function LinkTest({route, navigation}) {
  const {roomNumber} = route.params;
  // const [query, setQuery] = useState('');
  // const [realTime, setRealTime] = useState('');
  // useEffect(() => {
  //   const onValueChange = database()
  //     .ref(`/test/count`)
  //     .on('value', snapshot => {
  //       setRealTime(JSON.stringify(snapshot.val()));
  //     });
  //   return () =>
  //     database()
  //       .ref(`/test/count`)
  //       .off('value', onValueChange);
  // }, [realTime]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Text>set/get = {query}</Text> */}
        <Text>roomNumber = {JSON.stringify(roomNumber)}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'incre'}
          onPress={() => testIncre()}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'Create Room'}
          onPress={() => testDecre()}
        />
      </View>
    </View>
  );
}
