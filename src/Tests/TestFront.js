import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {
  testGet,
  testSet,
  testIncre,
  testDecre,
  buildLink,
  parseUrl,
} from '../utils/fbtestfunctions';
import { urlJson } from '../Utils/linkfunctions';

//Dynamic link receiving example
export default function TestFront({navigation}) {
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => { //'link' object includes url(the 'link' parameter), appname, etc.
        console.log(JSON.stringify(link));
        if (link) { //if user opened the app by dynamic link
          if (link.url.match('https://vote.pls.page.link/.*')) {
            let urlJson = urlJson(link.url); //Jsonify parameters of the link
            if (urlJson.room) { //if link has 'room' parameter, navigate to next screen with the parameters
              navigation.navigate('LinkTest', { 
                roomNumber: urlJson.room, 
                carryLink: link.url, 
                h: urlJson.h,
              });
            } else { //if link has no 'room' parameter, navigate to create room screen
              navigation.navigate('LinkCreate');
            }
          } else{ //if link does not match, navigate to create room screen
              navigation.navigate('LinkCreate');
          }
        } else { //if the user didn't open the app by dynamic link, navigate to create room screen
          navigation.navigate('LinkCreate');
        }
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Hi</Text>
        {/* <Text>Link= {link}</Text> */}
      </View>
    </View>
  );
}
