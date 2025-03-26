import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircularButton";

const PlaceholderImage = require("@/assets/images/background-image.png");

//making function for image picker
export default function imagePicker() {
  const [picName, setPicName] = React.useState<string | undefined>(undefined); //useState for taking image
  const [showAppOption, setShowAppOption] = React.useState<boolean>(false); //useState for showing options in the app

  //we made a function to pick an image from users gallery
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setPicName(result.assets[0].uri);
      setShowAppOption(true);
    } else {
      alert("You didn't select any image!!!");
    }
  };

  const onReset = () => {
    setShowAppOption(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImg={picName} />
      </View>

      {showAppOption ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOption(true)}
          />
        </View>
      )}
    </View>
  );
}

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 140,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
