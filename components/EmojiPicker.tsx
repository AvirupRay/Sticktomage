import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker() {
  return (
    <View>
      <Text>EmojiPicker</Text>
    </View>
  );
}
