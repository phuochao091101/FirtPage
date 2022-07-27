import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/Detail";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import { render } from "react-dom";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigator;
