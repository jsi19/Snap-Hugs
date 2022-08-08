import { StyleSheet, View, TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Center, Text, Pressable, HStack, VStack, Image } from "native-base";

import carrot from "../../assets/images/send-to-nav-bar/carrot.png";
import magnifyingGlass from "../../assets/images/send-to-nav-bar/magnifying_glass.png";
import peopleIcon from "../../assets/images/send-to-nav-bar/people_icon.png";
import plus from "../../assets/images/send-to-nav-bar/plus.png";
import ashley from "../../assets/send-to/ashley.png";
import bernard from "../../assets/send-to/bernard.png";
import bitmoji from "../../assets/send-to/bitmoji.png";
import location from "../../assets/send-to/location.png";
import shelby from "../../assets/send-to/shelby.png";

export default function SendToOverlay(props) {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeDown={hideModal}>
      <TouchableOpacity
        style={styles.sendToButton}
        onPress={() => setModalVisible(true)}
      ></TouchableOpacity>

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
          {/* Stories title */}
          <HStack>
            <View style={styles.Left}>
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
                    {/* New Story button */}
                    <HStack>
                      <Image
                        source={plus}
                        alt="plus"
                        style={styles.plus}
                      ></Image>
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
                  <Center h="50" w="362" bg="white" rounded="xl" shadow={2}>
                    <HStack space={1}>
                      <Image
                        source={bitmoji}
                        alt="bitmoji"
                        style={styles.bitmoji}
                      ></Image>
                      <Text style={styles.buttonText} fontSize="md" bold>
                        My Story
                      </Text>
                    </HStack>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Center h="50" w="362" bg="white" rounded="xl" shadow={2}>
                    <HStack space={1}>
                      <Image
                        source={location}
                        alt="location"
                        style={styles.location}
                      ></Image>
                      <VStack>
                        <Text style={styles.snapMapText} fontSize="md" bold>
                          Snap Map
                        </Text>
                        <Text
                          style={styles.snapMapSubtitleText}
                          fontSize="xs"
                          color="light.400"
                        >
                          Add your snap to the Map!
                        </Text>
                      </VStack>
                    </HStack>
                  </Center>
                </TouchableOpacity>
              </VStack>

              {/* Post to hugs section */}
              {/* Post to hugs header */}
              <Text style={styles.stories} fontSize="xs" bold>
                Post to Hugs
              </Text>
              {/* Hugs boxes */}
              <VStack style={styles.storiesBoxes} space={1}>
                <TouchableOpacity onPress={props.setVideoToUndefined}>
                  <Center
                    h="50"
                    w="362"
                    rounded="xl"
                    shadow={2}
                    style={styles.technology}
                  >
                    <Text
                      style={styles.hugsText}
                      fontSize="md"
                      color="white"
                      bold
                    >
                      Technology
                    </Text>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Center
                    h="50"
                    w="362"
                    rounded="xl"
                    shadow={2}
                    style={styles.engineering}
                  >
                    <Text
                      style={styles.engineeringText}
                      fontSize="md"
                      color="white"
                      bold
                    >
                      Engineering
                    </Text>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Center
                    h="50"
                    w="362"
                    rounded="xl"
                    shadow={2}
                    style={styles.activism}
                  >
                    <Text
                      style={styles.activismText}
                      fontSize="md"
                      color="white"
                      bold
                    >
                      Activism
                    </Text>
                  </Center>
                </TouchableOpacity>
              </VStack>
              <TouchableOpacity>
                <Text
                  style={styles.viewMore}
                  fontSize="xs"
                  bold
                  color="light.400"
                >
                  View More
                </Text>
              </TouchableOpacity>

              {/* Recents section */}
              {/* Recents header */}
              <Text style={styles.stories} fontSize="xs" bold>
                Recents
              </Text>

              {/* Recents boxes */}
              <VStack style={styles.storiesBoxes}>
                <TouchableOpacity>
                  <Center h="50" w="362" bg="white" rounded="xl" shadow={2}>
                    <HStack space={1}>
                      <Image
                        source={bernard}
                        alt="bernard"
                        style={styles.recentsBitmoji}
                      ></Image>
                      <Text style={styles.recentsText} fontSize="md" bold>
                        Bernard
                      </Text>
                    </HStack>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Center h="50" w="362" bg="white" rounded="xl" shadow={2}>
                    <HStack space={1}>
                      <Image
                        source={ashley}
                        alt="ashley"
                        style={styles.ashleyBitmoji}
                      ></Image>
                      <Text style={styles.ashleyText} fontSize="md" bold>
                        Ashley
                      </Text>
                    </HStack>
                  </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Center h="50" w="362" bg="white" rounded="xl" shadow={2}>
                    <HStack space={1}>
                      <Image
                        source={shelby}
                        alt="shelby"
                        style={styles.ashleyBitmoji}
                      ></Image>
                      <Text style={styles.shelbyText} fontSize="md" bold>
                        Shelby
                      </Text>
                    </HStack>
                  </Center>
                </TouchableOpacity>
              </VStack>
            </View>
            <View style={styles.alphabetBar}>
              <TouchableOpacity>
                <Center h="510" w="4" bg="light.200" rounded="xl">
                  <VStack>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      A
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      B
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      C
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      D
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      E
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      F
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      G
                    </Text>

                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      H
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      I
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      J
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      K
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      L
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      M
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      N
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      O
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      P
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      Q
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      R
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      S
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      T
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      U
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      V
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      W
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      X
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      Y
                    </Text>
                    <Text
                      style={styles.alpabetText}
                      fontSize="xs"
                      color="light.400"
                    >
                      Z
                    </Text>
                  </VStack>
                </Center>
              </TouchableOpacity>
            </View>
          </HStack>
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
    borderRadius: 40,
    marginTop: -30,
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
    marginLeft: 0,
    marginRight: 80,
  },

  peopleIcon: {
    width: 20,
    height: 19,
    marginLeft: 155,
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
    marginTop: 20,
    marginLeft: 20,
  },

  newStoryButton: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
    marginLeft: 208,
  },

  storiesTop: {
    marginTop: 7,
  },

  storiesBoxes: {
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 10,
  },

  bitmoji: {
    width: 40,
    height: 40,
    marginLeft: -175,
    marginTop: -3,
  },

  buttonText: {
    marginTop: 6,
  },

  location: {
    width: 35,
    height: 35,
    marginLeft: -151,
    marginTop: 2,
  },

  snapMapText: {
    marginLeft: 3,
    marginBottom: -3,
  },

  snapMapSubtitleText: {
    marginLeft: 3,
  },

  hugsText: {
    marginLeft: -251,
  },

  activismText: {
    marginLeft: -272,
  },

  engineeringText: {
    marginLeft: -249,
  },

  viewMore: {
    marginLeft: 312,
    marginBottom: -15,
  },

  recentsBitmoji: {
    width: 40,
    height: 40,
    marginLeft: -180,
    marginTop: -5,
  },

  recentsText: {
    marginTop: 6,
    marginLeft: -1,
  },

  ashleyBitmoji: {
    width: 40,
    height: 40,
    marginLeft: -178,
    marginTop: -5,
  },

  ashleyText: {
    marginTop: 6,
    marginLeft: -2,
  },

  shelbyText: {
    marginTop: 6,
    marginLeft: -2,
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

  alphabetBar: {
    marginTop: 125,
    marginLeft: 10,
  },

  alpabetText: {
    marginLeft: 3,
  },
});
