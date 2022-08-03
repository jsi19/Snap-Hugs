import profileExample from "../../assets/profile_images/profile_ex.png";
import vanessaVideo from "../../assets/video/vanessa_test.mp4";
import StoryComponent from "../components/StoryComponent";
import React from "react";
import { StyleSheet } from "react-native";
import {
  NativeBaseProvider,
  Container,
  Center,
  VStack,
  HStack,
  Text,
  Circle,
  ScrollView,
  Pressable,
} from "native-base";

export default function StoriesScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Friends section */}
        <Container style={styles.friends}>
          <Text bold fontSize="md">
            Friends
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack space={3} justifyContent="center">
              <StoryComponent
                imageSource={profileExample}
                videoSource={vanessaVideo}
                shortName="Vanessa M"
                longName="Vanessa Malabanan"
                videoTitle="A Day in the Life"
              />

              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
            </HStack>
          </ScrollView>
        </Container>

        {/* Hugs section */}
        <Container style={styles.hugs}>
          <Text bold fontSize="md">
            HUGS
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack space={9}>
              <VStack space={3} justifyContent="center">
                <Pressable
                  onPress={() => {
                    navigation.navigate("HugStack");
                  }}
                >
                  <Center h="60" w="330" bg="light.300" rounded="2xl" />
                </Pressable>
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
              </VStack>

              <VStack space={3} justifyContent="center">
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
              </VStack>
            </HStack>
          </ScrollView>
        </Container>

        {/* Discover section */}
        <Container style={styles.discover}>
          <Text bold fontSize="md">
            Discover
          </Text>
          <VStack space={3}>
            <HStack space={3}>
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
            </HStack>

            <HStack space={3}>
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
            </HStack>
          </VStack>
        </Container>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  friends: {
    margin: 16,
    minWidth: 400,
  },

  hugs: {
    margin: 16,
    minWidth: 400,
  },

  discover: {
    margin: 16,
  },
});
