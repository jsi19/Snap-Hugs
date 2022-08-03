import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video, Audio } from "expo-av";

export default function VideoComponent(props) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  return (
    <View>
      <Video
        ref={video}
        style={props.style}
        source={props.videoFile}
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}
