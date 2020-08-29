import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
export default function Welcome({navigation}) {
  return (
    <View style={footer.container}>
      <View style={styles.content}>
        <Text style={{fontSize: 20}}>TODO: 인트로 사진</Text>
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
  footer: {
    flex: 1.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 40,
    marginStart: 20,
    marginEnd: 20,
  },
  joinButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#023e71',
    marginBottom: 3,
    borderRadius: 13,
  },
  joinTitle: {
    fontSize: 19,
    color: 'white',
  },
  createButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  createTitle: {
    fontSize: 17,
    color: '#707070',
  },
});
