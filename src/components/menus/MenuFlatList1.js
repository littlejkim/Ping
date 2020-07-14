import React, {Component} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/Menu';

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

export function selected(index) {
  console.log(index);
}

export default function ManuFlatList1() {
  const {menuData} = React.useContext(MenuContext);

  return (
    <FlatList
      data={formatData(menuData.menu1)}
      style={styles.container}
      renderItem={({item, index}) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <TouchableOpacity style={styles.item} onPress={() => selected(index)}>
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
