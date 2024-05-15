import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";
import { SIZES, TYPOGRAPHY } from "../theme";
import { AntDesign, Octicons, MaterialIcons } from "@expo/vector-icons";

type ScreenRouteProp = RouteProp<StackParamList, "BookingsScreen">;
type NavProp = NavigationProp<StackParamList, "BookingsScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const BookingsScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header navigation={navigation} title="Bookings" showBack={false} />
      <EmptyDesign /> */}

      <View
        style={{
          borderRadius: SIZES.sm,
          borderWidth: 1,
          borderColor: "black",
          padding: SIZES.lg,
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: "https://source.unsplash.com/random/?house,repairing",
          }}
          style={{ height: Platform.OS === 'android' ? 80 : 60, width:Platform.OS === 'android' ? 80 : 60, borderRadius: SIZES.xs }}
        />
        <View style={{ marginStart: SIZES.xs }}>
          <Text style={TYPOGRAPHY.h3}>Swedish Massage</Text>
          <Text
            style={{
              ...TYPOGRAPHY.h4,
              color: "gray",
              marginVertical: SIZES.xxs,
            }}
          >
            Service
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...TYPOGRAPHY.h3, fontSize: SIZES.sm }}>$14.0</Text>
            <Text
              style={{
                ...TYPOGRAPHY.h3,
                fontSize: SIZES.sm,
                marginStart: SIZES.xs,
                color: "gray",
                textDecorationLine: "line-through",
              }}
            >
              $8.0
            </Text>

            <AntDesign
              style={{ marginHorizontal: SIZES.sm }}
              name="minussquareo"
              size={SIZES.md}
            />
            <Text style={{ ...TYPOGRAPHY.h3, fontSize: SIZES.sm }}>3</Text>

            <TouchableOpacity
              style={{
                height: 18,
                width: 18,
                borderRadius: 4,
                backgroundColor: "gray",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: SIZES.sm,
              }}
            >
              <MaterialIcons name="add" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: SIZES.md,
  },
});
