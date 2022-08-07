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
        <Pressable onPress={props.onPress}>
          <Image style={styles.carrot} source={carrot} alt="carrot"></Image>
        </Pressable>
        <Divider thickness="2" orientation="vertical" />
        <VStack>
          <Text style={styles.modalViewText} bold fontSize="xs">
            {props.longName}
          </Text>
          <Text style={styles.modalViewText} fontSize="xs">
            {props.videoTitle}
          </Text>
        </VStack>
      </HStack>

      <HStack style={styles.modalNavRightSide} space={2}>
        <Pressable onPress={props.onPress}>
          <Image
            style={styles.bookmark}
            source={bookmark}
            alt="bookmark"
          ></Image>
        </Pressable>
        <Pressable onPress={props.onPress}>
          <Image style={styles.threeDots} source={threeDots} alt="menu"></Image>
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

  carrot: {
    width: 38,
    height: 38,
  },

  bookmark: {
    width: 36,
    height: 36,
  },

  threeDots: {
    width: 38,
    height: 38,
  },
});
