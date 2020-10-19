import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Snackbar from 'react-native-snackbar';

const width = Dimensions.get('window').width / 2 - 20;

export default function Join({route, navigation}) {
  const {data} = route.params;
  // useEffect(() => {
  //   if (data != null) {
  //     Snackbar.show({
  //       text: '클립보드에 있는 방으로 바로 들어가시겠습니까?',
  //       duration: Snackbar.LENGTH_INDEFINITE,
  //       action: {
  //         text: '바로가기',
  //         textColor: 'green',
  //         onPress: () => {
  //           /* Do something. */
  //         },
  //       },
  //     });
  //   } else {
  //     console.log('not our URL');
  //   }
  // }, []);

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
          onPress={() => navigation.navigate('Create')}
          activeOpacity={0.5}>
          <Image
            style={{width: 230, height: 230}}
            source={require('../images/qr.png')}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 20, marginTop: 20, marginBottom: 15}}>
          또는
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Create')}
          activeOpacity={0.5}>
          <Image
            style={{width: 250, height: 250}}
            source={require('../images/url.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  subContainer: {
    flex: 0,
    paddingLeft: 20,
    paddingTop: 40,
  },
  buttonContainer: {
    flex: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {fontSize: 18, color: 'white'},
});
