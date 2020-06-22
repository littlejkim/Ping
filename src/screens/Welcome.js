import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../constants/styles';
export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.title}>
          <Text>title</Text>
        </View> */}
      <View style={styles.content}>
        <Text>content</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Create"
            onPress={() => navigation.navigate('Create', {depthId: 1})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Join"
            onPress={() => navigation.navigate('Join', {depthId: 1})}
          />
        </View>
      </View>
    </View>
  );
}
