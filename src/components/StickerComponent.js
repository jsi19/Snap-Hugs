import aDayInTheLife from "../../assets/sticker-overlay/a-day-in-the-life.png";
import Gestures from "react-native-easy-gestures-new";
import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Sticker() {
  return (
    <Gestures
      rotatable={true}
      rotate={"15deg"}
      scalable={true}
      onEnd={(event, styles) => {
        console.log(styles);
      }}
    >
      <Image source={aDayInTheLife} style={styles.sticker} />
    </Gestures>
  );
}

const styles = StyleSheet.create({
  sticker: {
    top: 400,
    left: 225,
    width: 200,
    height: 200,
  },
});
