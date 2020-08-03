import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {
  testGet,
  testSet,
  testIncre,
  testDecre,
  buildLink,
  parseUrl,
  buildLinkShort,
} from '../utils/fbtestfunctions';
import iid from '@react-native-firebase/iid';
export default function LinkTest({route, navigation}) {
  const [link, setLink] = useState('');
  const [parsed, setParsed] = useState('');
  const [room, setRoom] = useState('');
  const [linkSplit, setLinkSplit] = useState('');
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
        <Text>Parsed={parsed} </Text>
        <Text>Room={room} </Text>
        <Text>LINK={linkSplit} </Text>
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
          onPress={() => {
            buildLinkShort().then(res => {
              // var obj = parseUrl(decodeURIComponent(res));
              setLink(decodeURIComponent(res));
              // setParsed(JSON.stringify(obj));
              // setLinkSplit(obj.link.split("?")[0]);
              // var linkobj = parseUrl(decodeURIComponent(obj.link));
              // setRoom(linkobj.room);
            });
          }}
        />
      </View>
    </View>
  );
}
