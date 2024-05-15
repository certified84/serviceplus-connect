import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { COLORS, SIZES } from "../theme";
import { useTheme } from "react-native-paper";
import HomeScreen from "./HomeScreen";
import Home from "../assets/svg/navigation/Home";
import Booking from "../assets/svg/navigation/Booking";
import Message from "../assets/svg/navigation/Message";
import Profile from "../assets/svg/navigation/Profile";
import NavigationIcon from "../components/NavigationIcon";
import BookingsScreen from "./BookingsScreen";
import MessagesScreen from "./MessagesScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
  // REMOVE WEIRD TAB NAVIGATION COLOR
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="TeacherHomeScreen"
        activeColor={"#545454"}
        inactiveColor={COLORS.white}
        barStyle={styles.navigatorTabBar}
        shifting={false}
        screenListeners={{
          tabPress: (e) => {},
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Home"
                color={color}
                focused={focused}
                icon={<Home fill={color} />}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BookingsScreen"
          component={BookingsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Bookings"
                color={color}
                focused={focused}
                icon={<Booking fill={color} />}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Messages"
                color={color}
                focused={focused}
                icon={<Message fill={color} />}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Profile"
                color={color}
                focused={focused}
                icon={<Profile fill={color} />}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight ?? 0,
  },
  navigatorTabBar: {
    backgroundColor: COLORS.white,
  },
  tabBarIcon: {
    minWidth: 55,
    alignItems: "center",
    justifyContent: "space-between",
  },
  indicator: {
    width: SIZES.xxs,
    height: SIZES.xxs,
    borderRadius: SIZES.xxs,
    marginVertical: 4,
  },
});
