import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function about() {
  return (
    <View style={styles.view}>
      <Text style={styles.texti}>Made this app just for</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={[
            styles.texti,
            {
              backgroundColor: "#BF3131",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 30,
              color: "black",
              fontWeight: 900,
            },
          ]}
        >
          Learning
        </Text>
        <Text style={styles.texti}> purpose </Text>;
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#222",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  texti: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 40,
    textAlign: "center",
  },
});
