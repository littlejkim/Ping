import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {getNextRoomId,roomCreate} from '../utils/dbfunctions'
import {buildLinkShort} from '../utils/linkfunctions';
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
              buildLinkShort("Room Title",1).then(res => { //'res' is the returned dynamic link
                /*do something
                  ...
                  ...
                  ...
                */
               console.log("link: "+res)
                // setLink(decodeURIComponent(res));
              });
            }
          }
        />
      </View>
    </View>
  );
}
