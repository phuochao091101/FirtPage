import * as React from "react";
import { Button, View, Text, FlatList, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function HomeScreen(props) {
  const navigation = useNavigation();
  const [person, setPerson] = React.useState([
    {
      id: 1,
      name: "A green door",
      price: 12.5,
    },
    {
      id: 2,
      name: "B green door",
      price: 10,
    },
  ]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={person}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
