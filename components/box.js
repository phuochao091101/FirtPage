import * as React from "react";
import { Button, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function box(props) {
  return (
    <View style={globalStyles.box}>
      <Text>props.item.id</Text>
      <Text>props.item.name</Text>
    </View>
  );
}
