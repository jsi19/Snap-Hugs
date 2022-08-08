import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";

// Firebase
import "./firebase";

// Importing Root Component
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <RootSiblingParent>
      <RootNavigation />
    </RootSiblingParent>
  );
}
