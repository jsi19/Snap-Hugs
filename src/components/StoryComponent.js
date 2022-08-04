import StoriesOverlay from "../screens/StoriesOverlay.js";
import React from "react";
import { ImageBackground } from "react-native";
import { Text, VStack, Center } from "native-base";

export default function StoryComponent(props) {
  return (
    <>
      <VStack space={1} justifyItems="center">
        <ImageBackground source={props.imageSource} resizeMode="contain">
          <StoriesOverlay
            videoSource={props.videoSource}
            shortName={props.shortName}
            longName={props.longName}
            videoTitle={props.videoTitle}
          />
        </ImageBackground>
        <Center>
          <Text bold fontSize="sm">
            {props.shortName}
          </Text>
        </Center>
      </VStack>
    </>
  );
}
