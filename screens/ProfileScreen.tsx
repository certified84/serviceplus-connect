import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "ProfileScreen">;
type NavProp = NavigationProp<StackParamList, "ProfileScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Profile" showBack={false} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
