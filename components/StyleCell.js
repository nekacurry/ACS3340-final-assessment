import React from "react";
import { Text, StyleSheet, View } from "react-native";

function StyleCell( {name} ) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>{name}</Text>
      </View>

      <View style={styles.separator}/>
    </View>
  )
}

export default StyleCell

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  separator: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  }
})