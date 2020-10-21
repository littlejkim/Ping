import React, {useEffect, useContext} from 'react';
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
import {StoreContext} from '../context/DataContext';

export default function Join({route, navigation}) {
  const state = useContext(StoreContext);
  const {data} = route.params;
  useEffect(() => {
    if (data != null) {
      Snackbar.show({
        text: '복사된 있는 방으로 바로 입장하시겠습니까?',
        duration: Snackbar.LENGTH_INDEFINITE,
        backgroundColor: '#6495ED',
        action: {
          text: '입장하기 >',
          textColor: 'white',
          onPress: () => {
            navigation.navigate('Price');
            state.setUrl(data.substring(27));
          },
        },
      });
    } else {
      console.log('not our URL');
    }
  }, []);

  const dismiss = () => {
    exitAlert();
    Snackbar.dismiss();
  };
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
        <TouchableOpacity style={{marginRight: 20}} onPress={dismiss}>
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
          onPress={() => navigation.navigate('testQR')}
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
