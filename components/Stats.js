import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import data from '../metal.json'

const getTotalBands = (data) => {
  return data.length
}

const getTotalFans = (data) => {
  return data.reduce((acc, band) => acc + band.fans, 0)
}

const getTotalOrigins = (data) => {
  const origins = data.map(band => band.origin)
  return origins.length
}

const getTotalActive = (data) => {
  const active = data.filter(band => band.split === '-')
  return active.length
}

const getTotalSplit = (data) => {
  const split = data.filter(band => band.split !== '-')
  return split.length
}

function Stats() {

  const bandStyles = data.reduce((acc, band) => {
    band.style.split(",").forEach(style => acc.add(style))
    return acc
  }, new Set())

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🤘METAL🤘</Text>
      <Text style={styles.txt}>Count: {getTotalBands(data)}</Text>
      <Text style={styles.txt}>Fans: {(getTotalFans(data) * 1000 ).toLocaleString('en')}</Text>
      <Text style={styles.txt}>Countries: {getTotalOrigins(data)}</Text>
      <Text style={styles.txt}>Active: {getTotalActive(data)}</Text>
      <Text style={styles.txt}>Split: {getTotalSplit(data)}</Text>
      <Text style={styles.txt}>Styles: {bandStyles.size}</Text>
    </View>
  );
}

export default Stats


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white"
  },
  txt: {
    color: "white",
    fontSize: 18,
  },
  header : {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  }
})