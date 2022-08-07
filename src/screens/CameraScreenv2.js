import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState, useRef } from "react";
import { NativeBaseProvider } from "native-base";

import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";

// import { FFmpegKit } from "ffmpeg-kit-react-native";

import VideoReplayScreen from "./VideoReplayScreen";
import CameraOptionsv2 from "../components/CameraOptionsv2";
import CircularProgressIndicator from "../components/CircularProgressIndicator";

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

    const sendToHugs = () => {
      // Merge video/sticker file
      // FFmpegKit.execute("-i file1.mp4 -c:v mpeg4 file2.mp4").then(
      //   async (session) => {
      //     const returnCode = await session.getReturnCode();
      //     if (ReturnCode.isSuccess(returnCode)) {
      //       // SUCCESS
      //     } else if (ReturnCode.isCancel(returnCode)) {
      //       // CANCEL
      //     } else {
      //       // ERROR
      //     }
      //   }
      // );
      // Push file to database so it appears on stories page
    };

    return (
      // Video replay screen
      <VideoReplayScreen
        videoSource={{ uri: video.uri }}
        shareVideo={shareVideo}
        sendToHugs={sendToHugs}
        saveVideo={saveVideo}
        setVideoToUndefined={setVideoToUndefined}
      />

      // Sticker overlay screen

      // If sticker selected, show sticker on video replay screen

      // Send to screen (Hugs only appear if sticker selected)
    );
  }
  if (!isRecording) {
    return (
      <NativeBaseProvider>
        <Camera style={styles.camera} ref={cameraRef} type={type}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={isRecording ? stopRecording : recordVideo}
            >
              <Ionicons
                style={isRecording ? styles.isRecording : styles.notRecording}
                name={isRecording ? "ellipse" : "ellipse-outline"}
                size={isRecording ? 115 : 100}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <CameraOptionsv2 flipCamera={flipCamera} />
        </Camera>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <Camera style={styles.camera} ref={cameraRef} type={type}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={isRecording ? stopRecording : recordVideo}
            >
              <Ionicons
                style={isRecording ? styles.isRecording : styles.notRecording}
                name={isRecording ? "ellipse" : "ellipse-outline"}
                size={isRecording ? 115 : 100}
                color="white"
              />
              <CircularProgressIndicator />
            </TouchableOpacity>
          </View>
          <CameraOptionsv2 flipCamera={flipCamera} />
        </Camera>
      </NativeBaseProvider>
    );
  }
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
    opacity: 0.4,
    marginTop: -10,
    marginLeft: 11,
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
