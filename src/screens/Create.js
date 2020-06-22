import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../constants/styles';

export default function Create({route, navigation}) {
  const {depthId} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.popToTop()} title="Exit      " />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Depth: {depthId}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => navigation.push('Create', {depthId: depthId + 1})}
          />
        </View>
      </View>
    </View>
  );
}
