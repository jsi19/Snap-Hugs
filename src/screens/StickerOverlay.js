import { StyleSheet, View, TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Center, Text, Pressable, HStack, VStack, Image } from "native-base";

import back from "../../assets/sticker-overlay/back.png";

import beach from "../../assets/sticker-overlay/icons8-beach-100.png";
import bigBen from "../../assets/sticker-overlay/icons8-big-ben-100.png";
import blueberry from "../../assets/sticker-overlay/icons8-blueberry-100.png";
import boardingPass from "../../assets/sticker-overlay/icons8-boarding-pass-100.png";
import bonsai from "../../assets/sticker-overlay/icons8-bonsai-100.png";
import brutus from "../../assets/sticker-overlay/icons8-brutus-100.png";
import bug from "../../assets/sticker-overlay/icons8-bug-100.png";
import cherry from "../../assets/sticker-overlay/icons8-cherry-100.png";
import darthVader from "../../assets/sticker-overlay/icons8-darth-vader-100.png";
import grapes from "../../assets/sticker-overlay/icons8-grapes-100.png";
import starTrek from "../../assets/sticker-overlay/icons8-star-trek-100.png";
import bread from "../../assets/sticker-overlay/icons8-kawaii-bread-100.png";
import cupcake from "../../assets/sticker-overlay/icons8-kawaii-cupcake-100.png";
import soda from "../../assets/sticker-overlay/icons8-kawaii-soda-100.png";
import steak from "../../assets/sticker-overlay/icons8-kawaii-steak-100.png";
import sushi from "../../assets/sticker-overlay/icons8-kawaii-sushi-100.png";
import taco from "../../assets/sticker-overlay/icons8-kawaii-taco-100.png";
import palmTree from "../../assets/sticker-overlay/icons8-palm-tree-100.png";
import pineapple from "../../assets/sticker-overlay/icons8-pineapple-100.png";
import sourceCode from "../../assets/sticker-overlay/icons8-source-code-100.png";
import spring from "../../assets/sticker-overlay/icons8-spring-100.png";
import starTrekSymbol from "../../assets/sticker-overlay/icons8-star-trek-symbol-100.png";
import strawberry from "../../assets/sticker-overlay/icons8-strawberry-100.png";
import sunflower from "../../assets/sticker-overlay/icons8-sunflower-100.png";
import violet from "../../assets/sticker-overlay/icons8-violet-flower-100.png";
import aDayInTheLife from "../../assets/sticker-overlay/a-day-in-the-life.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function StickerOverlay(props) {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  const hideModal = () => {
    setModalVisible(false);
  };

  const hideModalAndPlaceStickerOnVideoReplayScreen = () => {
    hideModal();
    props.showSticker();
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeUp={hideModal}>
      <TouchableOpacity
        style={styles.sendToButton}
        onPress={() => setModalVisible(true)}
      ></TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInTiming={150}
        animationOutTiming={350}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.modalView}>
          {/* Back button */}
          <View style={styles.modalNav}>
            <HStack>
              <Pressable onPress={hideModal}>
                <Image source={back} alt="back" style={styles.back}></Image>
              </Pressable>

              {/* Search bar */}
              <TouchableOpacity>
                <Center
                  h="38"
                  w="346"
                  bg="black"
                  opacity={0.7}
                  rounded="3xl"
                  style={styles.search}
                >
                  <HStack space={10}>
                    <MaterialCommunityIcons
                      style={styles.magnifyingGlass}
                      name="magnify"
                      size={30}
                      color="white"
                    />
                    <Text
                      style={styles.searchText}
                      fontSize="md"
                      bold
                      color="light.400"
                    >
                      Search
                    </Text>
                  </HStack>
                </Center>
              </TouchableOpacity>
            </HStack>
          </View>

          {/* Stickers */}
          <VStack style={styles.stickerContainer} space={7}>
            {/* Row 1 */}
            <HStack>
              <TouchableOpacity
                onPress={hideModalAndPlaceStickerOnVideoReplayScreen}
              >
                <Image
                  source={aDayInTheLife}
                  alt="a day in the life"
                  style={styles.aDayInTheLife}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={beach} alt="beach" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={bigBen} alt="big ben" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={blueberry}
                  alt="blueberry"
                  style={styles.beach}
                />
              </TouchableOpacity>
            </HStack>

            {/* Row 2 */}
            <HStack>
              <TouchableOpacity>
                <Image source={bonsai} alt="bonsai" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={brutus} alt="brutus" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={bug} alt="bug" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={cherry} alt="cherry" style={styles.beach} />
              </TouchableOpacity>
            </HStack>

            {/* Row 3 */}
            <HStack>
              <TouchableOpacity>
                <Image
                  source={darthVader}
                  alt="darth vader"
                  style={styles.beach}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={grapes} alt="grapes" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={bread} alt="bread" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={cupcake} alt="cupcake" style={styles.beach} />
              </TouchableOpacity>
            </HStack>

            {/* Row 4 */}
            <HStack>
              <TouchableOpacity>
                <Image source={palmTree} alt="palm tree" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={pineapple}
                  alt="pineapple"
                  style={styles.beach}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sourceCode}
                  alt="source code"
                  style={styles.beach}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={spring} alt="spring" style={styles.beach} />
              </TouchableOpacity>
            </HStack>

            {/* Row 5 */}
            <HStack>
              <TouchableOpacity>
                <Image
                  source={starTrek}
                  alt="comm badge"
                  style={styles.beach}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={starTrekSymbol}
                  alt="comm badge"
                  style={styles.beach}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={strawberry}
                  alt="strawberry"
                  style={styles.beach}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sunflower}
                  alt="sunflower"
                  style={styles.beach}
                />
              </TouchableOpacity>
            </HStack>

            {/* Row 6 */}
            <HStack>
              <TouchableOpacity>
                <Image source={soda} alt="soda" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={violet} alt="violet" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={sushi} alt="sushi" style={styles.beach} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={boardingPass}
                  alt="boarding pass"
                  style={styles.beach}
                />
              </TouchableOpacity>
            </HStack>
          </VStack>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  sendToButton: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: -30,
  },

  modalView: {
    marginTop: -30,
    width: 420,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#736c62",
    opacity: 0.7,
  },

  modalNav: {
    height: 40,
    marginTop: 60,
  },

  back: {
    marginLeft: 20,
    marginTop: 2,
    width: 11,
    height: 22,
  },

  search: {
    marginLeft: 20,
    marginTop: -5,
  },

  magnifyingGlass: {
    marginLeft: -160,
  },

  searchText: {
    marginLeft: -30,
    marginTop: 3,
  },

  stickerContainer: {
    marginLeft: 10,
    marginTop: 10,
  },

  aDayInTheLife: {
    transform: [{ rotate: "15deg" }],
    marginTop: 10,
    marginRight: 2,
    width: 100,
    height: 100,
  },
});
