import * as React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import data from '../metal.json'
import Cell from './Cell';

function Bands() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        style={styles.list}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <Cell 
              title={item.band_name}
              origin={item.origin}
              formed={item.formed}
              fans={item.fans}
              split = {item.split}
            />
          )
        }}
        keyExtractor={(item) => item.band_name}
      />
    </SafeAreaView>
  );
}

export default Bands

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    flex: 1,
    width: "100%"
  }
})