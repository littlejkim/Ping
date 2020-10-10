/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Share,
  Image,
  Alert,
} from 'react-native';
export default function Results({route, navigation}) {
  const {data} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.popToTop()}>
          <Text style={{color: 'black', fontSize: 15}}>나가기</Text>
        </TouchableOpacity>
      ),
    });
  });
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Ping',
        message: '핑에 초대되었습니다!, 링크: ' + data,
        url: data,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          //   return Toast.show('공유하기 완료', Toast.SHORT);
        }
      } else if (result.action === Share.dismissedAction) {
        // return Toast.show('공유하기 완료', Toast.SHORT);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={container.container}>
        <View style={container.top}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../images/success.png')}
          />
          <Text style={container.title}>생성 완료</Text>
          <Text style={container.text}>
            방 만드는에 성공하셨습니다. QR코드 또는 URL을 공유해보시길 바랍니다!
          </Text>
        </View>
        <TouchableOpacity
          style={container.button}
          onPress={onShare}
          activeOpacity={0.7}>
          <Text style={container.buttonText}>공유하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const container = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  top: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  title: {
    marginTop: 25,
    fontSize: 32,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 15,
    fontSize: 18,
    color: 'black',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
  button: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
  },
});
