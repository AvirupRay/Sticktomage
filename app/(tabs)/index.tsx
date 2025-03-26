import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>

      <Link href={"./(tabs)/about"} style={styles.lnk}>
        About Us
      </Link>

      <Link href={"./(tabs)/imagePicker"} style={styles.lnk}>
        Image Picker
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  text: {
    color: "red",
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "italic",
  },
  lnk: {
    flexDirection: "row",
    color: "#000",
    fontWeight: "800",
    backgroundColor: "yellow",
    padding: 8,
    margin: 2,
    borderRadius: 50,
  },
});
