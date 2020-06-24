import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomButton';
export default function Join({route, navigation}) {
  const {depthId} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.popToTop()}>
          <Text style={{color: 'white', fontSize: 15}}>나가기</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Depth: {depthId}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'뒤로가기'}
          onPress={() => navigation.goBack()}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'다음'}
          onPress={() => navigation.push('Join', {depthId: depthId + 1})}
        />
      </View>
    </View>
  );
}
