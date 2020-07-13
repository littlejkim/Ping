import React, {Component} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';

const data = [
  {key: 'blue', img: '1'},
  {key: 'black', img: '2'},
  {key: 'gray', img: '3'},
  {key: 'white', img: '4'},
  {key: 'red', img: '5'},
  {key: 'blue', img: '6'},
  {key: 'none', img: '7'},
];

const numColumns = 2;

const formatData = data => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

export default function ManuFlatList1() {
  return (
    <FlatList
      data={formatData(data)}
      style={styles.container}
      renderItem={({item, index}) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>
              {item.key}
              {item.img}
            </Text>
          </TouchableOpacity>
        );
      }}
      numColumns={2}
    />
  );
}
