import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import dynamicLinks from '@react-native-firebase/dynamic-links';


export default function TestFront({navigation}) {
        useEffect(() => {
          dynamicLinks()
            .getInitialLink()
            .then(link => {
              if (link.url.substring(0,26) === 'https://vote.pls.page.link') {
                let room = link.url.substring(32);
                navigation.navigate('LinkTest',{roomNumber:room});
              }
              if (!link.url){
                  navigation.navigate('LinkCreate');
              }
            });
        }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Hi</Text>
      </View>
    </View>
  );
}
