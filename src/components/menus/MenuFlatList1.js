import React, {useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/Menu';

export default function ManuFlatList1() {
  function selectedItems(index) {
    setSelected(index);
    console.log(selected);
  }
  const [selected, setSelected] = useState({
    selected: null,
  });
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
          <TouchableOpacity
            style={styles.item}
            onPress={() => selectedItems(index)}>
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

const formatData = data => {
  const numColumns = 2;

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
