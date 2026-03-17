import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DesktopScreen from "./screens/DesktopScreen.js";
import AlbumsScreen from "./screens/AlbumsScreen.js";
import PlayMusicScreen from "./screens/PlayScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Desktop" component={DesktopScreen} />
        <Stack.Screen name="PlayMusic" component={PlayMusicScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}