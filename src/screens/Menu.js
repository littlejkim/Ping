import React, {useContext, useState, useEffect} from 'react';

import {Text, View, TouchableOpacity, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../constants/styles';

import {menuData} from '../constants/data';
import MenuNavigation from '../navigation/MenuNavigation';
import {StoreContext} from '../context/DataContext';

export const MenuContext = React.createContext();
let menu = {};
export default function Menu({navigation}) {
  const state = useContext(StoreContext);
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

  const pickSelected = evt => {
    // console.log("selected menu: "+JSON.stringify(evt));
    if (evt.selected === true) {
      menu[evt.menu] = 1;
    } else {
      delete menu[evt.menu];
    }
    console.log('resulting menu json:  ' + JSON.stringify(menu));
  };

  const finishVote = () => {
    state.setMenu(menu);
    navigation.navigate('Results');
  };
  return (
    <MenuContext.Provider value={{menuData, pickSelected}}>
      <View style={styles.menuContainer}>
        <MenuNavigation />
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#023e71'}
            title={'다음'}
            onPress={finishVote}
          />
        </View>
      </View>
    </MenuContext.Provider>
  );
}
