import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Hi</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'생성'}
          onPress={() => navigation.navigate('Create', {depthId: 1})}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'가입'}
          onPress={() => navigation.navigate('Join', {depthId: 1})}
        />
      </View>
    </View>
  );
}
