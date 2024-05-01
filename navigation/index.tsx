import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../theme";
import {
  BookmarksScreen,
  CategoryiesScreen,
  Dashboard,
  NotificationsScreen,
  ServicesScreen,
} from "../screens";

const Stack = createStackNavigator();

const index = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Dashboard"}
      screenOptions={{
        headerBackTitle: " ",
        headerTintColor: COLORS.primary,
        headerStyle: {
          backgroundColor: COLORS.lightGray,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CategoryiesScreen"
        component={CategoryiesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default index;
