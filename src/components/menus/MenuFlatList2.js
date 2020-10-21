import React, {useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../../constants/menuStyles';
import {MenuContext} from '../../screens/Menu';

export default function ManuFlatList2() {
  const {menuData, pickSelected} = React.useContext(MenuContext);
  const [selected, setSelected] = useState({
    renderedData: menuData.menu2,
  });

  function selectedItems(item, index) {
    let renderData = [...selected.renderedData];
    for (let data of renderData) {
      if (data.id === index) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    pickSelected(item);
    setSelected({renderedData: renderData});
  }

  return (
    <FlatList
      extraData={selected.renderedData}
      keyExtractor={item => item.id.toString()}
      data={formatData(menuData.menu2)}
      style={styles.container}
      renderItem={({item, index}) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
          <TouchableOpacity
            style={
              item.selected === true
                ? styles.itemSelected
                : styles.itemNotSelected
            }
            onPress={() => selectedItems(item, index)}>
            <Text style={styles.itemText}>
              {item.id}
              {item.menu}
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
