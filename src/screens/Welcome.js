import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
export default class Welcome extends React.Component {
  render() {
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
            <Button title="Sign-In" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Sign-up" />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
  },
});
