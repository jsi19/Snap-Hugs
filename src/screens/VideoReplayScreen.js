import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Sticker from "../components/StickerComponent";
import VideoComponent from "../components/VideoComponent";

export default function VideoReplayScreen(props) {
  return (
    <SafeAreaView style={styles.videoPlaybackContainer}>
      <VideoComponent
        style={styles.videoPlayback}
        videoSource={props.videoSource}
      />
      <View style={styles.recordingOptions}>
        <Button title="Share" onPress={props.shareVideo} />
        {/* {hasMediaLibraryPermission ? (
        <Button title="Save" onPress={props.saveVideo} />
      ) : undefined} */}

        <Button title="Save" onPress={props.saveVideo} />

        <Button title="Discard" onPress={props.setVideoToUndefined} />
      </View>
      {/* Make sticker appear only if selected */}
      <Sticker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  videoPlaybackContainer: { position: "relative" },

  videoPlayback: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    marginLeft: -35,
    width: 500,
    height: 780,
  },

  recordingOptions: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 700,
  },
});
