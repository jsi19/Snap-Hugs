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

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      ></TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={250}
        animationOutTiming={250}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.modalView}>
          <Pressable style={styles.modalMoreButton} onPress={hideModal}>
            <Center h="35" w="70" bg="white" rounded="3xl">
              <Text bold fontSize="sm">
                More
              </Text>
            </Center>
          </Pressable>
        </View>
      </Modal>
    </>
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

  button: {
    width: 100,
    height: 40,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#FFFC00",
    color: "#000",
  },
});
