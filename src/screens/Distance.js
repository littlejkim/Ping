/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import Picker from '../components/picker/Picker';
import {DataContext} from '../context/DataContext2';

export default function Price({navigation}) {
  const state = useContext(DataContext);
  React.useEffect(() => {
    console.log("after setPrice: "+JSON.stringify(state)) //just logging
  });
  // console.log(state.distance);
  const exitAlert = () =>
    Alert.alert(
      '경고',
      '홈 화면으로 이동하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '예', onPress: () => navigation.popToTop()},
      ],
      {cancelable: false},
    );
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 20}} onPress={exitAlert}>
          <Text style={{color: 'black', fontSize: 15}}>나가기</Text>
        </TouchableOpacity>
      ),
    });
  });
  const values = [
    {label: '안감', value: 0},
    {label: '5분 거리', value: 1},
    {label: '10분 거리', value: 2},
    {label: '20분 거리', value: 3},
    {label: '30분+', value: 4},
  ];

  const defaultValue = 0;
  const next = () => {
    state.setDistance(value2);
    navigation.navigate('Menu');
  };

  const extractFromPicker = (evt) => {
    console.log("evt:"+evt)
    value2 = evt;
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.1,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          marginLeft: 20,
        }}>
        <Text style={{fontSize: 25}}>3. 거리를 선택하세요.</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker {...{values, defaultValue, extractFromPicker}} />
      </View>
      <View style={styles.footer}>
        <CustomButton buttonColor={'#023e71'} title={'다음'} onPress={next} />
      </View>
    </View>
  );
}
