import bitmoji from "../../assets/top_nav_bar/new_bitmoji.png";
import search from "../../assets/top_nav_bar/new_search.png";
import addFriend from "../../assets/top_nav_bar/new_addfriend.png";
import more from "../../assets/top_nav_bar/new_more.png";
import back from "../../assets/top_nav_bar/new_back.png";

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

// Screens
import SnapHugsScreen from "../screens/SnapHugsScreen";
import HugScreen from "../screens/HugScreen";
import PartnerScreen from "../screens/PartnerScreen";

const Stack = createStackNavigator();

export default function HugStack({ navigation }) {

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

  let HugListTopNav = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} onPress={() => {navigation.navigate("Stories");}}>
          <Image source={back} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("More!")}}>
          <Image source={more} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </HeaderButtons>
    ),
  };

  let HugTopNav = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} onPress={() => {navigation.navigate("Snap Hugs");}}>
          <Image source={back} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
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

  let PartnerTopNav = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity
          style={styles.nav_icon}
          onPress={() => {
            navigation.navigate("Hug");
          }}
        >
          <Image source={back} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
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
        name="Snap Hugs"
        component={SnapHugsScreen}
        options={HugListTopNav}
      />
      <Stack.Screen name="Hug" component={HugScreen} options={HugTopNav} />
      <Stack.Screen
        name="Partner"
        component={PartnerScreen}
        options={PartnerTopNav}
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
