import bertrandImg from "../../assets/images/profile_images/bertrand.png";
import bertrandVideo from "../../assets/video/bertrandVideo.mp4";
import person2 from "../../assets/TechnologyHug/stories/career_story2.png";
import person3 from "../../assets/TechnologyHug/stories/career_story3.png";
import person4 from "../../assets/TechnologyHug/stories/career_story4.png";
import person5 from "../../assets/TechnologyHug/stories/career_story5.png";


import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Modal from "react-native-modal";
import HugStoryComponent from "../components/StoryComponent";
import {
  NativeBaseProvider,
  ChevronRightIcon,
  Container,
  Center,
  VStack,
  HStack,
  Text,
  Circle,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  Divider,
  Heading,
  Button,
} from "native-base";

import StoriesOverlay from "./StoriesOverlay";
import BetaTestingOverlay from "./BetaTestingOverlay";
import PartnerScreen from "./PartnerScreen";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

export default function HugScreen({ navigation }) {
    return (
      <NativeBaseProvider>
        {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
        <ScrollView style = {styles.hug_layout} showsVerticalScrollIndicator={false}>

          {/* Logo Image of Hug Community */}
          <View>
            <Image style = {styles.logo} bg="light.300" source={require("../../assets/hug_logo.png")}/>
            {/* <Heading h="250" w="415" bg="light.300" /> */}
          </View>

          {/* Learn More Button */}
          <Container style={styles.learnMoreButtonSection}>
            <Button style={styles.learnMoreButton} bg ="black" rounded="3xl">
              <Text bold fontSize="md" color="white">
                Learn More
              </Text>
            </Button>
          </Container>

          {/* Career Stories section */}
          <Container style={styles.stories_partners}>
            <Text bold fontSize="lg" color="white">
              Stories
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center" marginTop={2}>
                <HugStoryComponent
                  imageSource={bertrandImg}
                  videoSource={bertrandVideo}
                  shortName="Bertrand S"
                  longName="Bertrand Saint-Preux"
                  videoTitle="Product Manager for Snap's Inclusive Camera"
                />
                <HugStoryComponent
                imageSource={person2}
                shortName="Alvin"
                longName="Alvin Castillo"
                videoTitle="A Day in the Life"
                />
                <HugStoryComponent
                imageSource={person3}
                shortName="Alvin"
                longName="Alvin Castillo"
                videoTitle="A Day in the Life"
                />
                <HugStoryComponent
                imageSource={person4}
                shortName="Alvin"
                longName="Alvin Castillo"
                videoTitle="A Day in the Life"
                />
                <HugStoryComponent
                imageSource={person5}
                shortName="Alvin"
                longName="Alvin Castillo"
                videoTitle="A Day in the Life"
                />
              </HStack>
            </ScrollView>
          </Container>

          {/* Industry Insights section */}
          <Container style={styles.stories_partners}>
            <Text bold fontSize="lg" color="white">
              Industry Insights
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center" marginTop={2}>
                <Center h="170" w="170" bg="light.300" rounded="2xl">
                  <Image h="173" w="173" source={require("../../assets/TechnologyHug/insights/insight1.png")}/>
                </Center>
                <Center h="170" w="170" bg="light.300" rounded="2xl">
                  <Image h="170" w="170" source={require("../../assets/TechnologyHug/insights/insight2.png")}/>
                </Center>
                <Center h="170" w="170" bg="light.300" rounded="2xl">
                  <Image h="170" w="170" source={require("../../assets/TechnologyHug/insights/insight3.png")}/>
                </Center>
              </HStack>
            </ScrollView>
          </Container>

          {/* Community Partners section */}
          <Container style={styles.stories_partners}>
            <Text bold fontSize="lg" color="white">
              Get Involved With Partners
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center" marginTop={2}>
                <TouchableOpacity onPress={() => {navigation.navigate("Partner");}}>
                  <Center h="140" w="140" bg="light.300" rounded="2xl">
                    <Image h="140" w="140" source={require("../../assets/TechnologyHug/partners/partner1.png")}/>
                  </Center>
                </TouchableOpacity>
                <Center h="140" w="140" bg="light.300" rounded="2xl">
                  <Image h="140" w="140" source={require("../../assets/TechnologyHug/partners/partner2.png")}/>
                </Center>
                <Center h="140" w="140" bg="light.300" rounded="2xl">
                  <Image h="150" w="140" source={require("../../assets/TechnologyHug/partners/partner3.png")}/>
                </Center>
              </HStack>
            </ScrollView>
          </Container>

         
          {/* Beta Testing section */}
          <BetaTestingOverlay/>
          {/* <Container style={styles.stories_partners} justifyContent="center">
            <Text bold fontSize="lg" color="white">
              Become a Beta Tester
            </Text>
          </Container> */}
          
  
          {/* Get Involved section
          <Container style={styles.stories_partners}>
            <Text bold fontSize="lg" color="white">
              Get Involved
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center" marginTop={2}>
                <VStack space={3} justifyContent="center">
                  <TouchableOpacity onPress={() => {navigation.navigate("Partner");}}>
                    <Center style = {styles.event}>
                      <Text bold fontSize="md" color="white"> Example </Text>
                      <ChevronRightIcon size="5" color="white"/>
                    </Center>
                  </TouchableOpacity>
                  <Center style = {styles.event}>
                    <Text bold fontSize="md" color="white"> Example </Text>
                    <ChevronRightIcon size="5" color="white"/>
                  </Center>
                  <Center style = {styles.event}>
                      <Text bold fontSize="md" color="white"> Example </Text>
                      <ChevronRightIcon size="5" color="white"/>
                    </Center>
                </VStack>
              </HStack>
            </ScrollView>
          </Container> */}
          
          {/* Event Map section
          <Container style={styles.eventMapSection}>
            <Text bold fontSize="md" color="white">
              Learn More
            </Text>
            <Center alignSelf="center" rounded="2xl">
              <Image source={require("../../assets/event_map.png")}/>
            </Center>
          </Container> */}

        </ScrollView>
      </NativeBaseProvider>
    );
  }
  const icons = [{
    icon: <ChevronRightIcon />,
    iconName: "chevron-right"
  },]


  const styles = StyleSheet.create({
    beta_test: {
      minWidth: '100%',
      padding: 10,
      marginLeft: 0,
    },
    event: {
      height: 50,
      width: 380,
      bg:"black",
      rounded:"2xl",
      borderWidth:"2",
      borderColor:"white",
      borderRadius: "10px",
      flexDirection: "row",
      paddingTop : 10,
      paddingBottom : 10,
      justifyContent : "space-between"
    },

    hug_layout: {
      backgroundColor: "black",
    },

    logo: {
      minWidth: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    stories_partners: {
      minWidth: '100%',
      padding: 10,
      marginLeft:0
    },
  
    learnMoreButtonSection: {
      minWidth: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      marginTop: 16,
   },

   learnMoreButton: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    borderWidth: 1,
    borderColor:"white",
  },
  
    // eventMapSection: {
    //   margin: 16,
    //   minWidth: '100%',
    //   padding: 10,
    //   marginLeft:0
    // },
  
    betaTestButton: {
      width: 200,
      textAlignVertical: 'center',
      justifyContent: 'center',
      alignSelf: "center",
      borderWidth: 1,
      borderColor:"white",
    },
  });
