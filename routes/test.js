import { creatStackNavigator } from "@react-navigation/stack'";
import { createAppContainer } from "@react-navigation/stack'";
import Home from "../screens/Home";
import ReviewDetails from "../screens/Detail";

const screens = {
  ReviewDetails: {
    screen: ReviewDetails,
  },
  Home: {
    screen: Home,
  },
};

const HomeStack = creatStackNavigator(screens);

export default createAppContainer(HomeStack);
