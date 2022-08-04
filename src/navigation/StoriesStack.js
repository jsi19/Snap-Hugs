import bitmoji from "../../assets/top_nav_bar/new_bitmoji.png";
import search from "../../assets/top_nav_bar/new_search.png";
import addFriend from "../../assets/top_nav_bar/new_addfriend.png";
import more from "../../assets/top_nav_bar/new_more.png";

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { getAuth, signOut } from "firebase/auth";

// Screens
import StoriesScreen from "../screens/StoriesScreen";

// Stacks
import HugStack from "./HugStack";

const Stack = createStackNavigator();

export default function StoriesStack({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity
          onPress={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                user = null;
              })
              .catch((error) => {
                // An error happened.
                // should we do something with that error??
              });
          }}
        >
          <Image
            source={bitmoji}
            style={{ height: 46, width: 46, marginLeft: 10, marginRight: 4 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav_icon}
          onPress={() => {
            alert("Search!");
          }}
        >
          <Image source={search} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity
          style={styles.nav_icon}
          onPress={() => {
            alert("Add friend");
          }}
        >
          <Image source={addFriend} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nav_icon}
          onPress={() => {
            alert("More!");
          }}
        >
          <Image source={more} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </HeaderButtons>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stories"
        component={StoriesScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="HugStack"
        component={HugStack}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav_icon: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
});
