import sampleSticker from "../../assets/stickers/sample_sticker_tech.png";
import Gestures from "react-native-easy-gestures-new";
import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Sticker() {
  return (
    <Gestures
      rotatable={true}
      rotate={"0deg"}
      scalable={true}
      onEnd={(event, styles) => {
        console.log(styles);
      }}
    >
      <Image source={sampleSticker} style={styles.sticker} />
    </Gestures>
  );
}

const styles = StyleSheet.create({
  sticker: {
    top: 400,
    left: 25,
    width: 367,
    height: 60,
  },
});
