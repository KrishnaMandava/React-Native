import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet, Button, Alert} from 'react-native';

const names = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  // {key: 'Jackson'},
  // {key: 'James'},
  // {key: 'Joel'},
  // {key: 'John'},
  // {key: 'Jillian'},
  // {key: 'Jimmy'},
  // {key: 'Julie'},
  // {key: 'Devin'},
  // {key: 'Dan'},
  // {key: 'Dominic'},
  // {key: 'Jackson'},
  // {key: 'James'},
  // {key: 'Joel'},
  // {key: 'John'},
  // {key: 'Jillian'},
  // {key: 'Jimmy'},
  // {key: 'Julie'},
  // {key: 'Devin'},
  // {key: 'Dan'},
  // {key: 'Dominic'},
  // {key: 'Jackson'},
  // {key: 'James'},
  // {key: 'Joel'},
  // {key: 'John'},
  // {key: 'Jillian'},
  // {key: 'Jimmy'},
  // {key: 'Julie'},
];

const FlatListComponent = () => {
  const [data, setData] = useState(names);
  const [state, setState] = useState(1);
  const updateData = e => {
    names.push({key: 'Test'});
    // setState(state + 1);
  };
  console.log('renderrrrrrr.........');
  return (
    <View>
      <Button onPress={e => updateData(e)} title="Update" />
      <Button title="Right button" onPress={() => setData(data + 1)} />
      <Button title="Increase" onPress={() => setState(state + 1)} />
      <FlatList
        data={names}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        keyExtractor={(item, index) => item + index}
        // extraData={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default FlatListComponent;
