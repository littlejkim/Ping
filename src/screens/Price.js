/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import Picker from '../components/picker/Picker';
import {StoreContext} from '../context/DataContext';

export default function Price({navigation}) {
  const state = useContext(StoreContext);
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    /*business logic for component did update*/
  });
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

  // exit button
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
    {label: '5000원 이하', value: 0},
    {label: '5000원 ~ 1만원', value: 1},
    {label: '1만원 ~ 2만원', value: 2},
    {label: '2만원 ~ 3만원', value: 3},
    {label: '3만원 ~ 4만원', value: 4},
    {label: '4만원 ~ 5만원', value: 5},
    {label: '5만원 이상', value: 6},
  ];

  const defaultValue = 0;

  let value;
  const next = () => {
    state.setPrice(value);
    navigation.navigate('Distance');
  };
  const extractFromPicker = evt => {
    value = evt;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.1,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          marginLeft: 20,
        }}>
        <Text style={{fontSize: 25}}>2. 가격을 선택하세요.</Text>
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
