import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Modal from "react-native-modal";
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
  Divider,
  Heading,
  Button
} from "native-base";

import StoriesOverlay from "./StoriesOverlay";
import PartnerScreen from "./PartnerScreen";

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

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
              Industry Insights
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center">
                <Circle size="74px" bg="light.300">
                  <StoriesOverlay />
                </Circle>
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
              </HStack>
            </ScrollView>
          </Container>
  
          {/* Partner section */}
          <Container style={styles.stories_partners}>
            <Text bold fontSize="lg" color="white">
              Get Involved
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center">
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
          </Container>

          {/* Beta Testing section */}
          <Container style={styles.stories_partners} justifyContent="center">
            <Text bold fontSize="md" color="white">
              Beta Testing
            </Text>
            {/* <Center h="190" w="150" bg="light.300" rounded="2xl" /> */}
          </Container>
          
          {/* Event Map section */}
          <Container style={styles.eventMapSection}>
            <Text bold fontSize="md" color="white">
              Event Map
            </Text>
            <Center alignSelf="center" rounded="2xl">
              <Image source={require("../../assets/event_map.png")}/>
            </Center>
          </Container>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
  const icons = [{
    icon: <ChevronRightIcon />,
    iconName: "chevron-right"
  },]


  const styles = StyleSheet.create({
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
      margin: 16,
      minWidth: '100%',
      padding: 10,
      marginLeft:0
    },
  
    learnMoreButtonSection: {
      minWidth: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
   },
  
    eventMapSection: {
      margin: 16,
      minWidth: '100%',
      padding: 10,
      marginLeft:0
    },
  
    learnMoreButton: {
      textAlignVertical: 'center',
      justifyContent: 'center',
      alignSelf: "center",
      borderWidth: 1,
      borderColor:"white",
    },
  });