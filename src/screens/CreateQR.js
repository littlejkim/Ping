/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function CreateQR({route, navigation}) {
  const {link} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 25}}
          onPress={() => navigation.popToTop()}>
          <Text style={{color: 'black', fontSize: 15}}>나가기</Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={container.container}>
      <View style={container.top}>
        <QRCode value={link} size={270} />
        <Text style={container.title}>QR코드</Text>
        <Text style={container.text}>QR코드를 공유해보세요!</Text>
      </View>
      <View style={container.footer}>
        <TouchableOpacity
          style={container.shareButton}
          onPress={() => console.log('share image')}
          activeOpacity={0.5}>
          <Text style={container.shareButtonTitle}>이미지 공유하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const container = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    paddingTop: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 30,
    marginStart: 20,
    marginEnd: 20,
  },
  shareButton: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 50,
  },
  shareButtonTitle: {
    fontSize: 19,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 15,
    fontSize: 18,
    color: 'black',
  },
  title: {
    marginTop: 25,
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: 'black',
  },
});
