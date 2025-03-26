import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImg?: string;
};

export default function ImageViewer({ imgSource, selectedImg }: Props) {
  if (selectedImg)
    return <Image source={{ uri: selectedImg }} style={styles.image} />;
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    padding: 5,
  },
});
