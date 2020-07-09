import React, {Component} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';

const data = [
  {key: 'pizza', img: '1'},
  {key: 'chicken', img: '2'},
  {key: 'pasta', img: '3'},
  {key: 'burrito', img: '4'},
  {key: 'jaehoon', img: '5'},
  {key: 'jesus', img: '6'},
  {key: 'kebab', img: '7'},
  {key: 'icecream', img: '8'},
  {key: 'john', img: '9'},
  {key: 'jacob', img: '10'},
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

export default class ManuFlatList1 extends Component {
  constructor(props, context) {
    super(props, context);
  }
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
