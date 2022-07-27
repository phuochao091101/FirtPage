import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen(props) {
  const { id, name, price } = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{JSON.stringify(id)}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
