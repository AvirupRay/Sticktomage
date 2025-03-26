import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function about() {
  return (
    <View style={styles.view}>
      <Text style={styles.texti}>About Page</Text>;
      <Link href={"/(tabs)"}>Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#222",
    flex: 1,
  },
  texti: {
    color: "#000",
  },
});
