import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UsersScreen from "./Screens/Users";
import PostsScreen from "./Screens/Posts";
import DetailssScreen from "./Screens/Details";

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailssScreen,
    },
  },
  {
    initialRouteName: "Users",
  }
);

export default createAppContainer(AppNavigator);

