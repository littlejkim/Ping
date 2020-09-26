import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {urlJson} from '../utils/linkfunctions';

//Dynamic link receiving example
export default function TestFront({navigation}) {
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        //this 'link' object includes url(the returned link from buildShortLink()), appname, etc.
        console.log("link:\n "+JSON.stringify(link));
        if (link) {
          //if user opened the app by dynamic link
          if (link.url.match('https://vote.pls.page.link/.*')) {
            let param = urlJson(link.url); //Jsonify parameters of the link
            if (param.roomId) {
              //if link has 'roomId' parameter, enter room and navigate to next screen with the parameters
              navigation.navigate('LinkTest', {
                roomId: param.roomId,
                roomTitle: param.roomTitle,
              });
            } else {
              //if link has no 'roomTitle' parameter, navigate to create room screen
              navigation.navigate('LinkCreate');
            }
          } else {
            //if link does not match, navigate to create room screen
            navigation.navigate('LinkCreate');
          }
        } else {
          //if the user didn't open the app by dynamic link, navigate to create room screen
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
