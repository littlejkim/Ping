import React from 'react';
import {View, Text} from 'react-native';
import styles from '../constants/styles';
import CustomButton from '../components/CustomFooterButton';
import database from '@react-native-firebase/database';
import {testGet, testSet} from '../Utils/fbtestfunctions';
export default function dbtest({navigation}) {
    const[query, setQuery] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.content}>
  <Text>{query}</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'set'}
          onPress={() => testSet()}
        />
        <CustomButton
          buttonColor={'gray'}
          title={'get'}
          onPress={() => testGet().then((res) => setQuery(res))}
        />
      </View>
    </View>
  );
}
