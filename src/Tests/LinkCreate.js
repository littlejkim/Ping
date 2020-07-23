import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {testGet, testSet, testIncre, testDecre,buildLink} from '../utils/fbtestfunctions';
import iid from '@react-native-firebase/iid';
export default function LinkTest({route, navigation}) {
  const [link, setLink] = useState('');
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
        <Text>link={link} </Text>
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
          onPress={() => setLink(buildLink())}
        />
      </View>
    </View>
  );
}
