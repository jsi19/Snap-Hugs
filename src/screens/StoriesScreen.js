import friend1 from "../../assets/images/profile_images/friend1.png";
import friend2 from "../../assets/images/profile_images/friend2.png";
import friend3 from "../../assets/images/profile_images/friend3.png";
import friend4 from "../../assets/images/profile_images/friend4.png";
import friend5 from "../../assets/images/profile_images/friend5.png";
import friend6 from "../../assets/images/profile_images/friend6.png";
import hugsImg from "../../assets/images/snaphugs.png";
import discover2 from "../../assets/images/discover_images/Discover2.png";
import discover3 from "../../assets/images/discover_images/Discover3.png";
import discover4 from "../../assets/images/discover_images/Discover4.png";

import motherDaughterVideo from "../../assets/video/motherdaughter_video_sound.mp4";
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
  Image,
  ScrollView,
  Pressable,
} from "native-base";

export default function StoriesScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Friends section */}
        <Container style={styles.friends}>
          <Text bold fontSize="md">
            Friends
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack space={3} justifyContent="center">
              <StoryComponent
                imageSource={friend1}
                videoSource={motherDaughterVideo}
                shortName="Lois L"
                longName="Lois Lovelace"
                videoTitle="Mom and me 2002"
              />

              <StoryComponent
                imageSource={friend2}
                shortName="Alvin"
                longName="Alvin Castillo"
                videoTitle="A Day in the Life"
              />
              <StoryComponent
                imageSource={friend3}
                shortName="Maria S"
                longName="Maria Soltano"
                videoTitle="A Day in the Life"
              />
              <StoryComponent
                imageSource={friend4}
                shortName="Julia J"
                longName="Julia Jackson"
                videoTitle="A Day in the Life"
              />
              <StoryComponent
                imageSource={friend5}
                shortName="Benny"
                longName="Benny Harris"
                videoTitle="A Day in the Life"
              />

              <StoryComponent
                imageSource={friend6}
                shortName="Aayansh"
                longName="Aayansh Patel"
                videoTitle="A Day in the Life"
              />
            </HStack>
          </ScrollView>
        </Container>

        {/* Hugs section */}
        <Container style={styles.hugs}>
          <Text bold fontSize="md">
            Hugs
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("HugStack");
            }}
          >
            <Image
              source={hugsImg}
              alt={"snap hugs logo"}
              style={styles.hugsImg}
            />
          </Pressable>
        </Container>

        {/* Discover section */}
        <Container style={styles.discover}>
          <Text bold fontSize="md">
            Discover
          </Text>
          <VStack space={1}>
            <HStack space={1}>
              <Image
                source={discover2}
                alt={"discover story"}
                style={styles.discoverImg}
              />
              <Image
                source={discover3}
                alt={"discover story"}
                style={styles.discoverImg}
              />
            </HStack>

            <HStack space={1}>
              <Image
                source={discover4}
                alt={"discover story"}
                style={styles.discoverImg}
              />
              <Image
                source={discover2}
                alt={"discover story"}
                style={styles.discoverImg}
              />
            </HStack>
          </VStack>
        </Container>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  friends: {
    margin: 16,
    minWidth: 400,
  },

  hugs: {
    margin: 16,
    minWidth: 400,
  },

  hugsImg: {
    width: 382,
    height: 183,
  },

  discover: {
    margin: 16,
  },

  discoverImg: {
    width: 189,
    height: 281,
  },
});
