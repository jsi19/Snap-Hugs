import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Text, NativeBaseProvider, HStack } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Sticker from "../components/StickerComponent";
import VideoComponent from "../components/VideoComponent";
import VideoReplayOptions from "../components/VideoReplayOptions";

export default function VideoReplayScreen(props) {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.videoPlaybackContainer}>
        <VideoComponent
          style={styles.videoPlayback}
          videoSource={props.videoSource}
        />

        {/* Options */}
        <VideoReplayOptions />

        {/* Close view button*/}
        <View style={styles.closeContainer}>
          <TouchableOpacity
            style={styles.close}
            onPress={props.setVideoToUndefined}
          >
            <MaterialCommunityIcons name="close" size={25} color="white" />
          </TouchableOpacity>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.recordingOptions}>
          {/* <HStack space={2} justifyContent="center"> */}
          {/* Save button */}
          {/* <TouchableOpacity onPress={props.saveVideo}>
            <Center w="40" h="10" bg="white" opacity={50} rounded="3xl">
              <HStack space={2} justifyContent="center">
                <MaterialCommunityIcons
                  name="tray-arrow-down"
                  size={22}
                  color="black"
                />
                <Text fontSize="sm" bold style={styles.buttonText}>
                  Save
                </Text>
              </HStack>
            </Center>
          </TouchableOpacity> */}

          {/* Story button */}
          {/* <TouchableOpacity onPress={props.saveVideo}>
              <Center w="43" h="20" bg="white" opacity={50} rounded="3xl">
                <HStack space={2} justifyContent="center">
                  <MaterialCommunityIcons
                    name="tray-arrow-down"
                    size={22}
                    color="black"
                  />
                  <Text fontSize="sm" bold style={styles.buttonText}>
                    Story
                  </Text>
                </HStack>
              </Center>
            </TouchableOpacity>
          </HStack> */}

          {/* Send to button */}
          <TouchableOpacity style={styles.button}>
            <HStack space={1} justifyContent="center">
              <Text fontSize="xs" bold>
                Send To
              </Text>
              <MaterialCommunityIcons name="send" size={22} color="black" />
            </HStack>
          </TouchableOpacity>
          {/* <Button title="Share" onPress={props.shareVideo} />
          <Button title="Send to Hugs" onPress={props.sendToHugs} /> */}
        </View>
        {/* Make sticker appear only if selected */}
        <Sticker />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  videoPlaybackContainer: { backgroundColor: "#000", position: "relative" },

  videoPlayback: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    marginLeft: -35,
    width: 500,
    height: 780,
  },

  closeContainer: {
    position: "absolute",
  },

  close: {
    marginTop: 57,
    right: -17,
  },

  recordingOptions: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 750,
    // marginLeft: 285,
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
