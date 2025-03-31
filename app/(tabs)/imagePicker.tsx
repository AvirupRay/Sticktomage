//LIBRARY IMPORT
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { type ImageSource } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";

//COMPONENT IMPORT
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircularButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
const PlaceholderImage = require("@/assets/images/background-image.png");

//ALL THE USESTATES
//making function for image picker
export default function imagePicker() {
  const [picName, setPicName] = React.useState<string | undefined>(undefined); //useState for taking image
  const [showAppOption, setShowAppOption] = React.useState<boolean>(false); //useState for showing options in the app
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = React.useState<ImageSource | undefined>(
    undefined
  );
  const [status, requestPermission] = MediaLibrary.usePermissions(); //for giving permission of screen-shot

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
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  if (status === null) {
    requestPermission(); //request permission for taking screenshot
  }
  const imageRef = React.useRef<View>(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImg={picName} />
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
        </View>
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
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onCloseModal={onModalClose} onSelect={setPickedEmoji} />
      </EmojiPicker>
    </GestureHandlerRootView>
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
