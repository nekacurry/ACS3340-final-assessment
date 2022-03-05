import * as React from 'react';
import { FlatList } from 'react-native';
import StyleCell from './StyleCell';
import data from "../metal.json"
import { SafeAreaView } from 'react-native';

function Styles() {
  const styles = Array.from(
    data.reduce((acc, band) => {
      band.style.split(",").forEach(style => acc.add(style))
      return acc
    }, new Set())
  )
  return (
    <SafeAreaView>
      <FlatList 
        data={styles}
        renderItem={({item}) => <StyleCell name={item}/>}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
}

export default Styles