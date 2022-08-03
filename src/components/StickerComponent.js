import sampleSticker from "../../assets/stickers/sample_sticker_tech.png";
import Gestures from "react-native-easy-gestures-new";
import React from "react";
import { StyleSheet, Image } from "react-native";

/* Simple example: */
export default function Sticker() {
  return (
    /* Only drag example witn `onChange` event: */
    <Gestures rotatable={true} rotate={"0deg"} scalable={true}>
      <Image source={sampleSticker} style={styles.sticker} />
    </Gestures>
  );
}

const styles = StyleSheet.create({
  sticker: {
    top: -700,
    width: 367,
    height: 60,
  },
});
