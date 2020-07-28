import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {testGet, testSet, testIncre, testDecre,buildLink,parseUrl,buildLinkShort} from '../utils/fbtestfunctions';
export default function LinkTest({route, navigation}) {
  const {roomNumber,carryLink} = route.params;
  const [link, setLink] = useState();
  const [showingLink, setShowingLink] = useState();
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
  function viewLink(){
    if(carryLink){
      setShowingLink("Link="+carryLink);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Text>set/get = {query}</Text> */}
        <Text>Welcome!</Text>
        <Text>roomNumber = {JSON.stringify(roomNumber)}</Text>
        <Text style={{textAlign:'center'}}>{showingLink}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'showLink'}
          onPress={() => {
            viewLink();
          }}
        />
        <CustomButton
          buttonColor={'grey'}
          title={'toCreateRoom'}
          onPress={() => navigation.navigate('LinkCreate')}
        />
      </View>
    </View>
  );
}
