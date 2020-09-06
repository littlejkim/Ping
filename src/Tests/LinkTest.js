import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import database from '@react-native-firebase/database';
import {testGet, testSet, testIncre, testDecre,buildLink,parseUrl,buildLinkShort} from '../utils/fbtestfunctions';
export default function LinkTest({route, navigation}) {
  const {roomNumber,carryLink,h} = route.params;
  const [showingLink, setShowingLink] = useState();
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
        <Text style={{textAlign:'center'}}>roomOwner = {JSON.stringify(roomNumber)}</Text>
        <Text style={{textAlign:'center'}}>roomNumber = {JSON.stringify(h)}</Text>
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
