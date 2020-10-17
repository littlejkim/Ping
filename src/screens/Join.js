import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Snackbar from 'react-native-snackbar';

const width = Dimensions.get('window').width / 2 - 20;

export default function Join({route, navigation}) {
  const {data} = route.params;
  useEffect(() => {
    if (data != null) {
      Snackbar.show({
        text: '클립보드에 있는 방으로 바로 들어가시겠습니까?',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: '바로가기',
          textColor: 'green',
          onPress: () => {
            /* Do something. */
          },
        },
      });
    } else {
      console.log('not our URL');
    }
  }, []);

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
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{fontSize: 25}}>1. 초대 경로를 선택하세요.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonQR}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Price')}>
          <Text style={styles.text}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonURL} activeOpacity={0.7}>
          <Text style={styles.text}>URL</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  subContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonQR: {
    width: width + 100,
    height: width + 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#023e71',
  },
  buttonURL: {
    width: width + 100,
    height: width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  text: {fontSize: 18, color: 'white'},
});
