import { StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraOptionsv2(props) {
  return (
    <View style={styles.cameraOptions}>
      <TouchableOpacity onPress={props.flipCamera}>
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
          style={styles.plusCircle}
          name="add-circle"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraOptions: {
    position: "absolute",
    right: 10,
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

  plusCircle: {
    marginTop: 10,
    opacity: 0.4,
  },
});
