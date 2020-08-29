import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
import {TextInput} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

export default function Create({route, navigation}) {
  const [title, setTitle] = React.useState('');
  const [people, setPeople] = React.useState();
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
    <View style={{flex: 1}}>
      <View style={container.container}>
        <Text style={container.text}>1. 방 제목</Text>
        <TextInput
          style={container.input}
          // label="제목"
          value={title}
          onChangeText={text => setTitle(text)}
          mode="flat"
        />
        <Text style={container.text}>2. 인원 수</Text>
        <TextInput
          style={container.input}
          keyboardType={'numeric'}
          // label="제목"
          value={people}
          onChangeText={text => setPeople(text)}
          mode="flat"
        />
        <Text style={container.text}>3. 이동 수단</Text>
        <TouchableOpacity
          onPress={() => (
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
          )}>
          <Text>Touch here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'다음'}
          onPress={() => console.log(people)}
        />
      </View>
    </View>
  );
}

const container = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  text: {fontSize: 23, marginBottom: 5},
  button: {
    height: 50,
    flexDirection: 'row',
    marginEnd: 30,
    marginBottom: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'transparent',
    height: 50,
    marginBottom: 30,
  },
});
