import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ActivityItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.activity}>Activity</Text>
      {/* {duration > 60 && (activity == "Running" || activity == "Weights")} */}
      <View style={styles.rightSection}>
        <Image style={styles.image} source={require("../assets/warning.png")} />
        <Text style={styles.boxText}>Date</Text>
        <Text style={styles.boxText}>Duration min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "thistle",
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  boxText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#483285",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  container: {
    borderRadius: 10,
    backgroundColor: "#483285",
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: 25,
    width: 25,
    margin: 5,
  },
  rightSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 5,
  },
});