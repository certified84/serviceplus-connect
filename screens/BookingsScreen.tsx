import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "BookingsScreen">;
type NavProp = NavigationProp<StackParamList, "BookingsScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const BookingsScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Bookings" showBack={false} />
      <EmptyDesign />
    </SafeAreaView>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
