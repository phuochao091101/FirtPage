import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";

export default function About() {
  return (
    <View>
      <Text style={globalStyles.text}>About Page</Text>
    </View>
  );
}
