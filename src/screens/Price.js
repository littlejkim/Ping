import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import RNPickerSelect from 'react-native-picker-select';

export default function Price({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
        />
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'다음'}
          onPress={() => navigation.navigate('Create', {depthId: 1})}
        />
      </View>
    </View>
  );
}
