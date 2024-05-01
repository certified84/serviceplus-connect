import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "MessagesScreen">;
type NavProp = NavigationProp<StackParamList, "MessagesScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const MessagesScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Messages" showBack={false} />
      <EmptyDesign />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
