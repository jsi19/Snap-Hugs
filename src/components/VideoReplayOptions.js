import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StickerOverlay from "../screens/StickerOverlay";

export default function VideoReplayOptions(props) {
  return (
    <View style={styles.replayOptions}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.formatText}
          name="format-text"
          size={35}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.pencilOutline}
          name="pencil-outline"
          size={35}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.noteOutline}
          name="note-outline"
          size={35}
          color="white"
        />
        <StickerOverlay showSticker={props.showSticker} />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.contentCut}
          name="content-cut"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.music}
          name="music"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.magnify}
          name="magnify"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.paperclip}
          name="paperclip"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.crop}
          name="crop"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.infinity}
          name="all-inclusive"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  replayOptions: {
    position: "absolute",
    right: 10,
    paddingTop: 80,
    height: 250,
    width: 40,
    padding: 5,
  },

  formatText: {
    marginTop: -25,
  },

  pencilOutline: {
    marginTop: 20,
  },

  noteOutline: {
    marginTop: 20,
    transform: [{ rotate: "80deg" }],
  },

  contentCut: {
    marginTop: 20,
    transform: [{ rotate: "-90deg" }],
  },

  music: {
    marginTop: 20,
  },

  magnify: {
    marginTop: 20,
  },

  paperclip: {
    marginTop: 20,
    transform: [{ rotate: "45deg" }],
  },

  crop: {
    marginTop: 20,
  },

  infinity: {
    marginTop: 20,
    transform: [{ rotate: "-45deg" }],
  },
});
