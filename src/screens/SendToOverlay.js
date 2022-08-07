import { StyleSheet, View, TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  Center,
  Text,
  Circle,
  Pressable,
  HStack,
  VStack,
  Image,
} from "native-base";
import carrot from "../../assets/images/send-to-nav-bar/carrot.png";
import magnifyingGlass from "../../assets/images/send-to-nav-bar/magnifying_glass.png";
import peopleIcon from "../../assets/images/send-to-nav-bar/people_icon.png";

export default function SendToOverlay(props) {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeDown={hideModal}>
      <Pressable
        style={styles.sendToButton}
        onPress={() => setModalVisible(true)}
      ></Pressable>

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={150}
        animationOutTiming={350}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.modalView}>
          {/* Navbar */}
          <View style={styles.modalNav}>
            <HStack space={3}>
              <Pressable onPress={hideModal}>
                <Image
                  source={carrot}
                  alt="carrot"
                  style={styles.carrot}
                ></Image>
              </Pressable>

              <Center h="38" w="336" bg="light.200" rounded="3xl">
                <HStack space={10}>
                  <Image
                    source={magnifyingGlass}
                    alt="magnifyingGlass"
                    style={styles.magnifyingGlass}
                  ></Image>
                  <Text
                    style={styles.searchBar}
                    fontSize="sm"
                    bold
                    color="light.400"
                  >
                    Send To...
                  </Text>
                  <Image
                    source={peopleIcon}
                    alt="peopleIcon"
                    style={styles.peopleIcon}
                  ></Image>
                </HStack>
              </Center>
            </HStack>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  sendToButton: {
    position: "absolute",
    width: 30,
    height: 30,

    marginTop: -30,
    backgroundColor: "#fff",
    opacity: 0,
  },

  modalView: {
    marginTop: -30,
    width: 420,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#fafbfb",
  },

  modalNav: {
    height: 40,
    marginTop: 60,
  },

  carrot: {
    marginLeft: 25,
    marginTop: 13,
    width: 20,
    height: 12,
    opacity: 0.8,
  },

  magnifyingGlass: {
    width: 20,
    height: 19,
    marginRight: 80,
  },

  peopleIcon: {
    width: 20,
    height: 19,
    marginLeft: 125,
  },

  searchBar: {
    marginLeft: -100,
  },
});
