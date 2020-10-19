import React, {useState} from 'react';
import Clipboard from '@react-native-community/clipboard';

import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import {TextInput, HelperText, Checkbox} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {buildLinkShort} from '../utils/linkfunctions';
// import {Picker} from '@react-native-community/picker';
export default function Create({route, navigation}) {
  const [title, setTitle] = React.useState('');
  const [people, setPeople] = React.useState();
  const [checked, setChecked] = React.useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [titleError, setTitleError] = useState('');

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

  const titleHasErrors = () => {
    return title.length > 20;
  };

  const createRoom = () => {
    buildLinkShort(title, people)
      .then(res => {
        navigation.navigate('CreateResult', {data: res});
      })
      .catch(function(error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        navigation.navigate('CreateResult', {data: null});
      });
  };
  return (
    <View style={{flex: 1}}>
      <View style={container.container}>
        <View style={container.divider}>
          <Text style={container.text}>1. 방 제목</Text>
          <TextInput
            style={container.input}
            value={title}
            autoCorrect={false}
            onChangeText={text => setTitle(text)}
            mode="flat"
          />
          <HelperText type="error" visible={titleHasErrors()}>
            잘못되었습니다.
          </HelperText>
        </View>
        <Text style={container.text}>2. 인원 수</Text>
        <TextInput
          style={container.input}
          keyboardType={'numeric'}
          value={people}
          onChangeText={text => setPeople(text)}
          mode="flat"
        />
      </View>
      <View style={container.footer}>
        <TouchableOpacity
          style={container.nextButton}
          onPress={() => createRoom()}
          activeOpacity={0.5}>
          <Text style={container.nextButtonTitle}>생성하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const container = StyleSheet.create({
  container: {
    flex: 9,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  text: {fontSize: 23, marginBottom: 10},
  button: {
    height: 50,
    flexDirection: 'row',
    marginEnd: 30,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'transparent',
    height: 50,
  },
  picker: {
    flex: 1,
    paddingTop: 30,
  },
  divider: {
    paddingBottom: 30,
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
  nextButton: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 50,
  },
  nextButtonTitle: {
    fontSize: 19,
    color: 'white',
  },
});
