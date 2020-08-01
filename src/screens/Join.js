/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const width = Dimensions.get('window').width / 2 - 20;
const height = Dimensions.get('window').height / 2 - 20;

export default function Join({route, navigation}) {
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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingTop: 40,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Text style={{fontSize: 25}}>1. 초대 경로를 선택하세요.</Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            width: width + 100,
            height: width + 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#023e71',
          }}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Price')}>
          <Text style={{fontSize: 18, color: 'white'}}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width + 100,
            height: width - 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
          }}
          activeOpacity={0.7}>
          <Text style={{fontSize: 18, color: 'white'}}>URL</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});
