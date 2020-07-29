import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {testGet, testSet, testIncre, testDecre,buildLink,parseUrl} from '../utils/fbtestfunctions';


export default function TestFront({navigation}) {
  const [link,setLink] = useState();
        useEffect(() => {
          dynamicLinks()
            .getInitialLink()
            .then(link => {
              setLink(JSON.stringify(link));
              if(link){
                if (link.url.match('https://vote.pls.page.link/.*')) {
                  let parsedLink = parseUrl(link.url);
                  if(parsedLink.room){
                    navigation.navigate('LinkTest',{roomNumber:parsedLink.room,carryLink:link.url,h:parsedLink.h});
                  }else{
                    navigation.navigate('LinkCreate');
                  }
                }
              }
              else{
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
