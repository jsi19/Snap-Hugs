import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  NativeBaseProvider,
  Container,
  Center,
  VStack,
  Text,
  HStack,
  Circle,
  ScrollView,
  Pressable,
  Image,
} from "native-base";
import { useHandler } from 'react-native-reanimated';

export default function SnapHugsScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* About Hugs section */}
        <Center style = {styles.game_mini}>
          <Image h="100%" w="400" source={require("../../assets/hug_list/about_hug.png")} alt="About Hug"/>
        </Center>

        {/* Hug Communities section */}
        <Center style={styles.hug_communities}>
          <Text bold fontSize="md">
            Hug Communities
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <VStack space={6} alignItems="center">
              <TouchableOpacity onPress={() => {navigation.navigate("Hug");}}>
                <Image h="86" w="367" source={require("../../assets/hug_list/technology.png")} alt="Hug Community 1" />
              </TouchableOpacity>
              <Image h="86" w="367" flexDirection='row' justifyContent="center" alignItems="center" source={require("../../assets/hug_list/activism.png")} alt="Hug Community 2"/>
              <Image h="86" w="367" source={require("../../assets/hug_list/engineering.png")} alt="Hug Community 3"/>
              <Image h="86" w="367" source={require("../../assets/hug_list/healthcare.png")} alt="Hug Community 4"/>
              <Image h="86" w="367" source={require("../../assets/hug_list/finance.png")} alt="Hug Community 5"/>
              <Image h="86" w="367" source={require("../../assets/hug_list/energy.png")} alt="Hug Community 6" />
            </VStack>
          </ScrollView>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  game_mini_section: {
    flex: 6,
    padding: 10,
    marginLeft: 0,
    marginTop: -10,
},
game_mini: {
    height: 150,
    width: 395,
    alignSelf: "center",
    marginTop : 10,
    paddingBottom : -80,
  },
  betaLogo: {
    alignItems: 'center',
},
  hug_communities: {
    marginTop: -50,
    margin: 16,
    minWidth: 400,
    padding: 10,
    marginLeft: 0,
  },
});
