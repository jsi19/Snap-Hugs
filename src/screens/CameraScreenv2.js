import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";

import VideoReplayScreen from "./VideoReplayScreen";

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [type, setType] = useState(CameraType.front);

  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  const setVideoToUndefined = () => setVideo(undefined);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (
    hasCameraPermission === undefined ||
    hasMicrophonePermission === undefined
  ) {
    return <Text>Requestion permissions...</Text>;
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>;
  }

  function flipCamera() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false,
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (video) {
    let shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideoToUndefined();
      });
    };

    let saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideoToUndefined();
      });
    };

    // Video replay screen
    return (
      <VideoReplayScreen
        videoSource={{ uri: video.uri }}
        shareVideo={shareVideo}
        saveVideo={saveVideo}
        setVideoToUndefined={setVideoToUndefined}
      />
    );
  }

  return (
    <Camera style={styles.camera} ref={cameraRef} type={type}>
      <View style={styles.button}>
        <TouchableOpacity onPress={isRecording ? stopRecording : recordVideo}>
          {/* <TouchableOpacity onPress={flipCamera}> */}
          <Ionicons
            style={isRecording ? styles.isRecording : styles.notRecording}
            name={isRecording ? "ellipse" : "ellipse-outline"}
            size={isRecording ? 115 : 100}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {/* // Put these in own component */}
      <View style={styles.cameraOptions}>
        <TouchableOpacity onPress={flipCamera}>
          <Ionicons
            style={styles.flipIcon}
            name="repeat"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.flashIcon}
            name="ios-flash-off-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.videoIcon}
            name="ios-film-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.musicIcon}
            name="ios-musical-notes-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.nightModeIcon}
            name="ios-moon-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: "100%",
    width: "100%",
  },

  button: {
    marginTop: 690,
    alignItems: "center",
  },

  isRecording: {
    marginTop: -5,
    opacity: 0.4,
  },

  cameraOptions: {
    position: "absolute",
    right: 5,
    paddingTop: 40,
    height: 250,
    width: 40,
    padding: 5,
  },

  flipIcon: {
    marginTop: 5,
    transform: [{ rotate: "90deg" }],
  },

  flashIcon: {
    marginTop: 10,
  },

  videoIcon: {
    marginTop: 10,
  },

  musicIcon: {
    marginTop: 10,
  },

  nightModeIcon: {
    marginTop: 10,
  },
});
