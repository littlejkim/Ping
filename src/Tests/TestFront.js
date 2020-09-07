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
import { urlJson } from '../utils/linkfunctions';

//Dynamic link receiving example
export default function TestFront({navigation}) {
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => { //this 'link' object includes url(the 'link' parameter from buildShortLink()), appname, etc.
        console.log(JSON.stringify(link));
        if (link) { //if user opened the app by dynamic link
          if (link.url.match('https://vote.pls.page.link/.*')) {
            let urlJson = urlJson(link.url); //Jsonify parameters of the link
            if (urlJson.roomTitle) { //if link has 'roomTitle' parameter, navigate to next screen with the parameters
              navigation.navigate('LinkTest', { 
                roomTitle: urlJson.roomTitle, 
                memberCount: urlJson.memberCount,
              });
            } else { //if link has no 'roomTitle' parameter, navigate to create room screen
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
