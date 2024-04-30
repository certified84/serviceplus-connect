import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
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

type ScreenRouteProp = RouteProp<StackParamList, "BookmarksScreen">;
type NavProp = NavigationProp<StackParamList, "BookmarksScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const BookmarksScreen: React.FC<Props> = ({ route, navigation }) => {
  const bookmarks = services.filter((service) =>
    route?.params.bookmarks.includes(service.id)
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: SIZES.md,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation?.goBack()}
          style={{
            width: 45,
            height: 45,
            borderRadius: SIZES.xs,
            backgroundColor: "#333333",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={TYPOGRAPHY.h3}>My Bookmarks</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            width: 45,
            height: 45,
            borderRadius: SIZES.xs,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#333333",
          }}
        >
          <More />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.innerContainer}>
        {bookmarks!.length > 0 ? (
          <View>
            {services.map((item) => (
              <Service
                key={item.id}
                service={item}
                bookmarked
                onBookmark={() => {}}
              />
            ))}
          </View>
        ) : (
          <EmptyDesign />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingHorizontal: SIZES.md,
    marginVertical: SIZES.md,
  },
});
