import carrot from "../../assets/stories-nav-bar/down_carrot.png";
import bookmark from "../../assets/stories-nav-bar/charm_bookmark.png";
import threeDots from "../../assets/stories-nav-bar/bi_three-dots-vertical.png";
import { VStack, HStack, Text, Pressable, Image, Divider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function HugVideoNav(props) {
  return (
    <HStack style={styles.modalNav}>
      <HStack space={4} alignItems="center">
        <Pressable onPress={() => setModalVisible(false)}>
          <Image source={carrot} alt="carrot"></Image>
        </Pressable>
        <Divider thickness="2" orientation="vertical" />
        <VStack>
          <Text style={styles.modalViewText} bold fontSize="xs">
            {props.displayName}
          </Text>
          <Text style={styles.modalViewText} fontSize="xs">
            {props.title}
          </Text>
        </VStack>
      </HStack>

      <HStack style={styles.modalNavRightSide} space={5}>
        <Pressable onPress={() => setModalVisible(false)}>
          <Image source={bookmark} alt="bookmark"></Image>
        </Pressable>
        <Pressable onPress={() => setModalVisible(false)}>
          <Image source={threeDots} alt="menu"></Image>
        </Pressable>
      </HStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  modalViewText: {
    color: "#fff",
  },

  modalNav: {
    height: 40,
    marginLeft: 16,
    marginTop: 60,
  },

  modalNavRightSide: {
    marginLeft: "auto",
  },
});
