import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

function Cell({ title, origin, formed, fans, split }) {
  fans = fans * 1000
  return (
    <TouchableHighlight
      style={styles.cell}
      underlayColor="#ffffff"
    >
      <View>
        <View style={styles.view}>
          <Text style={[(split === '-') ? styles.title : styles.titleSplit]}>{title}</Text>
          <Text style={styles.origin}>{origin}</Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.btmtxt}>{formed}</Text>
          <Text style={styles.btmtxt}>{fans.toLocaleString('en')}</Text>
        </View>
      </View>
      
    </TouchableHighlight>
  )
}

export default Cell

const styles = StyleSheet.create({
  cell: {
    padding: 20,
    backgroundColor: "black"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  titleSplit: {
    fontSize: 18,
    color: "#666",
    textDecorationLine: "line-through"
  },
  origin: {
    fontSize: 18,
    color: "gray"
  },
  btmtxt: {
    fontSize: 12,
    color: "white"
  },
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})