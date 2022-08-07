import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image, NativeBaseProvider, Center } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import Sticker from "../components/StickerComponent";

import VideoComponent from "../components/VideoComponent";
import VideoReplayOptions from "../components/VideoReplayOptions";
import bitmoji from "../../assets/top_nav_bar/new_bitmoji.png";
import SendToOverlay from "./SendToOverlay";

export default function VideoReplayScreen(props) {
  return (
    <NativeBaseProvider>
      <VideoComponent
        style={styles.videoPlayback}
        videoSource={props.videoSource}
      />

      {/* Options */}
      <VideoReplayOptions />

      {/* Close view button*/}
      <View style={styles.closeContainer}>
        <TouchableOpacity
          style={styles.close}
          onPress={props.setVideoToUndefined}
        >
          <MaterialCommunityIcons name="close" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <Center style={styles.bottomButtonsContainer}>
        {/* Save button */}
        <TouchableOpacity style={styles.saveButton} onPress={props.saveVideo}>
          <MaterialCommunityIcons
            name="tray-arrow-down"
            size={30}
            color="white"
          />
        </TouchableOpacity>

        {/* Story button */}
        <TouchableOpacity style={styles.storyButton}>
          <Image style={styles.bitmoji} source={bitmoji} alt="bitmoji" />
        </TouchableOpacity>

        {/* Send to button */}
        <TouchableOpacity style={styles.sendButton}>
          <MaterialCommunityIcons name="send" size={30} color="#FFFC00" />
          <SendToOverlay />
        </TouchableOpacity>
      </Center>

      <Sticker />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  videoPlayback: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    marginLeft: -35,
    width: 500,
    height: 820,
  },

  closeContainer: {
    position: "absolute",
  },

  close: {
    marginTop: 50,
    right: -17,
  },

  bottomButtonsContainer: {
    position: "absolute",
    marginTop: 630,
    marginLeft: 345,
  },

  saveButton: {
    marginTop: 5,
  },

  bitmoji: {
    height: 40,
    width: 40,
  },

  storyButton: {
    marginTop: 20,
  },

  sendButton: {
    transform: [{ rotate: "-45deg" }],
    width: 50,
    marginTop: 20,
    marginLeft: 20,
  },
});
