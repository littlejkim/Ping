import React, {Component} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';

const data = [
  {key: 'tennis', img: '1'},
  {key: 'soccer', img: '2'},
  {key: 'football', img: '3'},
  {key: 'tabletennis', img: '4'},
  {key: 'golf', img: '5'},
  {key: 'baseball', img: '6'},
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

export default class ManuFlatList3 extends Component {
  renderItem = ({item, index}) => {
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
  };

  render() {
    return (
      <FlatList
        data={formatData(data)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={2}
      />
    );
  }
}
