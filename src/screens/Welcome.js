import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize: 40}}>밥 먹자</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'생성'}
          onPress={() => navigation.navigate('Create')}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'가입'}
          onPress={() => navigation.navigate('Join')}
        />
      </View>
    </View>
  );
}
