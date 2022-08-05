import InsightOverlay from "../screens/InsightOverlay.js";
import React from "react";
import { ImageBackground } from "react-native";
import { Text, VStack, Center } from "native-base";

export default function InsightComponent(props) {
  return (
    <>
      <VStack space={1} justifyItems="center">
        <ImageBackground source={props.imageSource} resizeMode="contain">
          <InsightOverlay
            videoSource={props.videoSource}
            shortName={props.shortName}
            longName={props.longName}
            videoTitle={props.videoTitle}
          />
        </ImageBackground>
      </VStack>
    </>
  );
}
