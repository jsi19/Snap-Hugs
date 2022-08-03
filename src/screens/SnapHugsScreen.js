import React from 'react'
import { View, StyleSheet } from 'react-native';
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
} from "native-base";

export default function SnapHugsScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hug Communities section */}
        <Center style={styles.hug_communities}>
          <Text bold fontSize="md">
            Hug Communities
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <VStack space={6} alignItems="center">
              <Pressable
                onPress={() => {
                  navigation.navigate("Hug");
                }}
              >
                <Center h="79" w="370" bg="light.300" rounded="2xl" />
              </Pressable>
              <Center h="79" w="370" bg="light.300" rounded="2xl" />
              <Center h="79" w="370" bg="light.300" rounded="2xl" />
              <Center h="79" w="370" bg="light.300" rounded="2xl" />
              <Center h="79" w="370" bg="light.300" rounded="2xl" />
              <Center h="79" w="370" bg="light.300" rounded="2xl" />
              <Center h="79" w="370" bg="light.300" rounded="2xl" />
            </VStack>
          </ScrollView>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  hug_communities: {
    margin: 16,
    minWidth: 400,
    padding: 10,
    marginLeft: 0,
  },
});
