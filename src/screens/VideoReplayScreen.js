import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image, NativeBaseProvider, Center } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Sticker from "../components/StickerComponent";

import VideoComponent from "../components/VideoComponent";
import VideoReplayOptions from "../components/VideoReplayOptions";
import bitmoji from "../../assets/top_nav_bar/new_bitmoji.png";
import SendToOverlay from "./SendToOverlay";
import Toast from "react-native-root-toast";

export default function VideoReplayScreen(props) {
  // Toast
  const showToast = () => {
    Toast.show("Sent to Technology Hug!          ", {
      duration: Toast.durations.LONG,
      position: 45,
      backgroundColor: "#A550A5",
      textColor: "#fff",
      opacity: 1,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 1200,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  };

  const showToastAndReturnToCameraScreen = () => {
    props.setVideoToUndefined();
    showToast();
  };

  // Set sticker visibility
  const [isStickerVisible, setStickerVisible] = useState(false);

  const showSticker = () => {
    setStickerVisible(true);
  };

  if (isStickerVisible) {
    return (
      <NativeBaseProvider>
        <VideoComponent
          style={styles.videoPlayback}
          videoSource={props.videoSource}
        />

        {/* Options */}
        <VideoReplayOptions showSticker={showSticker} />

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
            <SendToOverlay
              showToastAndReturnToCameraScreen={
                showToastAndReturnToCameraScreen
              }
            />
          </TouchableOpacity>
        </Center>

        <Sticker />
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <VideoComponent
          style={styles.videoPlayback}
          videoSource={props.videoSource}
        />

        {/* Options */}
        <VideoReplayOptions showSticker={showSticker} />

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
            <SendToOverlay
              showToastAndReturnToCameraScreen={
                showToastAndReturnToCameraScreen
              }
            />
          </TouchableOpacity>
        </Center>
      </NativeBaseProvider>
    );
  }
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
