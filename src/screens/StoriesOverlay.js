import VideoComponent from "../components/VideoComponent";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Modal from "react-native-modal";
import HugVideoNav from "../components/HugVideoNav";

import { Center, Text, Circle, Pressable } from "native-base";

export default function StoriesOverlay(props) {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    // Dismiss modal/overlay on swipe up
    <GestureRecognizer
      style={{ flex: 1 }}
      onSwipeUp={() => setModalVisible(false)}
    >
      <Pressable onPress={() => setModalVisible(true)}>
        <Circle size="74px" opacity={0} />
      </Pressable>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInTiming={250}
        animationOutTiming={250}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.modalView}>
          <HugVideoNav displayName={props.displayName} title={props.title} />
          <VideoComponent style={styles.video} source={props.source} />
          <Pressable
            style={styles.modalMoreButton}
            onPress={() => setModalVisible(false)}
          >
            <Center h="35" w="70" bg="white" rounded="3xl">
              <Text bold fontSize="sm">
                More
              </Text>
            </Center>
          </Pressable>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: -30,
    width: 420,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#000",
  },

  video: {
    alignSelf: "center",
    marginTop: 10,
    width: 500,
    height: 760,
  },

  modalMoreButton: {
    alignSelf: "center",
    marginTop: -45,
  },
});
