import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";
import Back from "../assets/svg/Back";
import More from "../assets/svg/More";
import EmptyDesign from "../components/EmptyDesign";
import { services } from "../store/dummy";
import Service from "../components/Service";
import { useState } from "react";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "NotificationsScreen">;
type NavProp = NavigationProp<StackParamList, "NotificationsScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const NotificationsScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Header navigation={navigation} title="Notifications" />
      <EmptyDesign />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingHorizontal: SIZES.md,
    marginVertical: SIZES.md,
  },
});
