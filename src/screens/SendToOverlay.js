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
import plus from "../../assets/images/send-to-nav-bar/plus.png";

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

              <TouchableOpacity>
                <Center h="38" w="346" bg="light.200" rounded="3xl">
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
              </TouchableOpacity>
            </HStack>
          </View>

          {/* Stories section */}
          {/* Stories header */}
          <HStack space={2} style={styles.storiesTop}>
            <Text style={styles.stories} fontSize="xs" bold>
              Stories
            </Text>
            <TouchableOpacity>
              <Center
                style={styles.newStoryButton}
                bg="light.200"
                rounded="3xl"
              >
                <HStack>
                  <Image source={plus} alt="plus" style={styles.plus}></Image>
                  <Text style={styles.newStory} fontSize="xs" bold>
                    New Story
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
          </HStack>

          {/* Stories boxes */}
          <VStack style={styles.storiesBoxes}>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                bg="white"
                rounded="xl"
                shadow={2}
              ></Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                bg="white"
                rounded="xl"
                shadow={2}
              ></Center>
            </TouchableOpacity>
          </VStack>

          {/* Post to hugs section */}
          {/* Post to hugs header */}
          <Text style={styles.stories} fontSize="xs" bold>
            Post to Hugs
          </Text>
          {/* Stories boxes */}
          <VStack style={styles.storiesBoxes}>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                rounded="xl"
                shadow={2}
                style={styles.technology}
              ></Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                rounded="xl"
                shadow={2}
                style={styles.engineering}
              ></Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                rounded="xl"
                shadow={2}
                style={styles.activism}
              ></Center>
            </TouchableOpacity>
          </VStack>

          {/* Recents section */}

          {/* Recents header */}

          <Text style={styles.stories} fontSize="xs" bold>
            Recents
          </Text>

          {/* Recents boxes */}
          <VStack style={styles.storiesBoxes}>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                bg="white"
                rounded="xl"
                shadow={2}
              ></Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                bg="white"
                rounded="xl"
                shadow={2}
              ></Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center
                h="50"
                w="375"
                bg="white"
                rounded="xl"
                shadow={2}
              ></Center>
            </TouchableOpacity>
          </VStack>
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
    marginLeft: 20,
    marginTop: 13,
    width: 20,
    height: 12,
    opacity: 0.8,
  },

  magnifyingGlass: {
    width: 20,
    height: 19,
    marginRight: 90,
  },

  peopleIcon: {
    width: 20,
    height: 19,
    marginLeft: 135,
  },

  searchBar: {
    marginLeft: -110,
  },

  plus: {
    width: 11,
    height: 11,
    marginTop: 2,
    marginRight: 2,
  },

  stories: {
    marginTop: 10,
    marginLeft: 20,
  },

  newStoryButton: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
    marginLeft: 225,
  },

  storiesTop: {
    marginTop: 7,
  },

  storiesBoxes: {
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 5,
  },

  technology: {
    backgroundColor: "#A550A5",
  },

  engineering: {
    backgroundColor: "#0EADFF",
  },

  activism: {
    backgroundColor: "#000",
  },
});
