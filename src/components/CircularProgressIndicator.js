import { View } from "react-native";
import { StyleSheet } from "react-native";

import CircularProgress from "react-native-circular-progress-indicator";

export default function CircularProgressIndicator() {
  return (
    <View style={styles.progressIndicator}>
      <CircularProgress
        value={100}
        radius={65}
        duration={30000}
        activeStrokeColor={"#FFFC00"}
        activeStrokeWidth={11}
        showProgressValue={false}
      />
    </View>
  );
  ß;
}

const styles = StyleSheet.create({
  progressIndicator: {
    marginTop: -127,
    marginLeft: 0,
  },
});
