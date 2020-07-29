import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import Picker from '../components/picker/Picker';
// import {priceValues} from '../constants/data';

export default function Price({navigation}) {
  const values = [
    {label: '5000원 이하', value: 0},
    {label: '5000원 ~ 10,000원', value: 1},
    {label: '10,000원 ~ 20,000원', value: 2},
    {label: '20,000원 ~ 30,000원', value: 3},
    {label: '30,000원 이상', value: 4},
  ];

  const defaultValue = 0;

  return (
    <View style={{flex: 1}}>
      <View style={styles.pickerContainer}>
        {/* <Text style={styles.pickerTitle}>Select Price</Text> */}
        <Picker {...{values, defaultValue}} />
      </View>
      <View style={styles.footer}>
        <CustomButton buttonColor={'#023e71'} title={'다음'} />
      </View>
    </View>
  );
}
