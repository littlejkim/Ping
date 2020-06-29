import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

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

const formatData = (data, numColumns) => {
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

const numColumns = 2;
export default class App extends React.Component {
  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      //   <View style={styles.item}>
      //     <Text style={styles.itemText}>{item.key}</Text>
      //   </View>
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
      <View style={{flex: 1}}>
        <Text style={styles.title}>메뉴를 골라보세요.</Text>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    height: Dimensions.get('window').width / numColumns - 10, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 20,
  },
});
