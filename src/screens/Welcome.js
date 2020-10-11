import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import styles from '../constants/styles';

export default function Welcome({navigation}) {
  return (
    <View style={footer.container}>
      <View style={styles.content}>
        <Text style={footer.title}>핑</Text>
        <Text style={footer.text}>환영합니다!</Text>
      <Image
              style={{width: 250, height: 250}}
              source={require('../images/main2.png')}
            />
      </View>
      <View style={footer.footer}>
        <TouchableOpacity
          style={footer.joinButton}
          onPress={() => navigation.navigate('Join')}
          activeOpacity={0.7}>
          <Text style={footer.joinTitle}>방 가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={footer.createButton}
          onPress={() => navigation.navigate('Create')}
          activeOpacity={0.5}>
          <Text style={footer.createTitle}>방 신규 생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const footer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 15,
    marginBottom: 30,
    fontSize: 18,
    color: 'black',
  },
  footer: {
    flex: 1.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 30,
    marginStart: 20,
    marginEnd: 20,
  },
  joinButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    marginBottom: 3,
    borderRadius: 50,
  },
  joinTitle: {
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
