import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import Picker from '../components/picker/Picker';

const start = 1900;
const values = new Array(new Date().getFullYear() - start + 1)
  .fill(0)
  .map((_, i) => {
    const value = start + i;
    return {value, label: `${value}`};
  })
  .reverse();

export default function Price({navigation}) {
  const defaultValue = 1990 - start;

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
