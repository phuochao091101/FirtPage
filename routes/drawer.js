import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/Home";
import About from "./screens/About";
import DetailsScreen from "./screens/Detail";
import Navigator from "./routes/homeStack";

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Article" component={About} />
    </Drawer.Navigator>
  );
}
