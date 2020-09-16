import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Picker,
} from 'react-native';
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
    return title.includes('@');
  };

  const createRoom = () => {
    buildLinkShort(title, people)
      .then(res => {
        console.log('link: ' + res);
      })
      .catch(function(error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
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
            Email address is invalid!
          </HelperText>
        </View>
        <View style={container.divider}>
          <Text style={container.text}>2. 인원 수</Text>
          <TextInput
            style={container.input}
            keyboardType={'numeric'}
            value={people}
            onChangeText={text => setPeople(text)}
            mode="flat"
          />
        </View>
        {/* <View style={container.divider}>
          <Text style={container.text}>3. 이동 수단</Text> */}
        {/* <Picker
              selectedValue={title}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}>
              <Picker.Item label="도보" value="foot" />
              <Picker.Item label="차량" value="car" />
              <Picker.Item label="버스" value="bus" />
              <Picker.Item label="지하철" value="subway" />
            </Picker> */}
        {/* <View style={{paddingLeft: 10, paddingTop: 10}}>
            <RNPickerSelect
              placeholder={{
                label: '인원을 선택하세요',
                value: null,
              }}
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
          </View>
        </View> */}
        {/* <View style={container.divider}>
          <Text style={container.text}>4. 이동 수단</Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View> */}
      </View>

      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'생성'}
          onPress={() => createRoom()}
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
    paddingTop: 10,
    // paddingBottom: 20,
    // justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  text: {fontSize: 23, marginBottom: 10},
  button: {
    height: 50,
    flexDirection: 'row',
    marginEnd: 30,
    // marginBottom: 20,
    // justifyContent: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'transparent',
    height: 50,
    // marginBottom: 30,
  },
  picker: {
    flex: 1,
    paddingTop: 30,
    // alignItems: 'center',
  },
  divider: {
    paddingBottom: 30,
  },
});
