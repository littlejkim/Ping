/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Share,
  Image,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

export default function Results({route, navigation}) {
  const {data} = route.params;
  useEffect(() => {
    if (data != null) {
      Clipboard.setString(data);
    }
  }, []);
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Ping',
        message: '핑에 초대되었습니다!',
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
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };
  if (data != null) {
    console.log('link: ' + data);
    return (
      <View style={container.container}>
        <View style={container.top}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../images/happy.gif')}
          />
          <Text style={container.title}>성공</Text>
          <Text style={container.text}>
            방 만드는데 성공하셨습니다!{'\n'}QR코드 또는 URL을 공유해보시길
            바랍니다!
          </Text>
        </View>
        <View style={container.footer}>
          <TouchableOpacity
            style={container.footerSuccessButton}
            onPress={() => navigation.navigate('CreateQR', {link: data})}
            activeOpacity={0.7}>
            <Text style={container.footerButtonTitle}>QR 코드 생성</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={container.createButton}
            onPress={() => onShare()}
            activeOpacity={0.5}>
            <Text style={container.createTitle}>URL 공유하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={container.container}>
        <View style={container.top}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../images/sad.gif')}
          />
          <Text style={container.title}>실패</Text>
          <Text style={container.text}>
            방 만드는데 실패하셨습니다.{'\n'}잠시 후 다시 시도해주시기 바랍니다.
          </Text>
        </View>
        <View style={container.footer}>
          <TouchableOpacity
            style={container.footerFailureButton}
            onPress={() => navigation.popToTop()}
            activeOpacity={0.5}>
            <Text style={container.footerButtonTitle}>다시하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  title: {
    marginTop: 25,
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 3,
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
  footerSuccessButton: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 50,
  },
  footerFailureButton: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#de3030',
    borderRadius: 50,
  },
  footerButtonTitle: {
    fontSize: 19,
    color: 'white',
  },
  createButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  createTitle: {
    fontSize: 17,
    textDecorationLine: 'underline',
    color: '#707070',
  },
});
