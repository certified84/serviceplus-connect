import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { categories } from "../store/dummy";
import { useState } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Cleaning from "../assets/svg/categories/Cleaning";
import Repairing from "../assets/svg/categories/Repairing";
import Painting from "../assets/svg/categories/Painting";
import Laundry from "../assets/svg/categories/Laundry";
import MenShaving from "../assets/svg/categories/MenShaving";
import Movers from "../assets/svg/categories/Movers";
import Plumbing from "../assets/svg/categories/Plumbing";
import Appliance from "../assets/svg/categories/Appliance";

type ScreenRouteProp = RouteProp<StackParamList, "CategoryiesScreen">;
type NavProp = NavigationProp<StackParamList, "CategoryiesScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const CategoryiesScreen: React.FC<Props> = ({ route, navigation }) => {
  const [values, setValues] = useState({
    bookmarks: route?.params.bookmarks,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Categories" />
      <ScrollView>
        <View style={{ ...styles.cardContainer, marginTop: 32 }}>
          <Text style={TYPOGRAPHY.h3}>Recently Used</Text>
          <View style={styles.iconsRow}>
            <Category
              text="Cleaning"
              icon={<Cleaning />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "cleaning"),
                })
              }
            />
            <Category
              text="Painting"
              icon={<Painting />}
              badge="New"
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "painting"),
                })
              }
            />
            <Category
              text="Appliance"
              icon={<Appliance />}
              badge="New"
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find(
                    (item) => item.type === "appliance"
                  ),
                })
              }
            />
            <Category
              text="Men's Shaving"
              icon={<MenShaving />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "shaving"),
                })
              }
            />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Text style={TYPOGRAPHY.h3}>Available Categories</Text>

          <View style={styles.iconsRow}>
            <Category
              text="Cleaning"
              icon={<Cleaning />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "cleaning"),
                })
              }
            />
            <Category
              text="Repairing"
              icon={<Repairing />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "repair"),
                })
              }
            />
            <Category
              text="Painting"
              icon={<Painting />}
              badge="New"
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "painting"),
                })
              }
            />
            <Category
              text="Laundry"
              icon={<Laundry />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "laundry"),
                })
              }
            />
          </View>

          <View style={styles.iconsRow}>
            <Category
              text="Appliance"
              icon={<Appliance />}
              badge="New"
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find(
                    (item) => item.type === "appliance"
                  ),
                })
              }
            />
            <Category
              text="Plumbing"
              icon={<Plumbing />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "plumbing"),
                })
              }
            />
            <Category
              text="Movers"
              icon={<Movers />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "movers"),
                })
              }
            />
            <Category
              text="Men's Shaving"
              icon={<MenShaving />}
              onPress={() =>
                navigation?.navigate("ServicesScreen", {
                  bookmarks: values.bookmarks,
                  category: categories.find((item) => item.type === "shaving"),
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: SIZES.md,
    marginVertical: SIZES.md,
  },

  iconsRow: {
    marginVertical: SIZES.md,
    flexDirection: "row",
    gap: 5,
  },
  iconCol: {
    flex: 0.25,
    alignItems: "center",
  },
  iconText: {
    ...TYPOGRAPHY.p,
    textAlign: "center",
    marginTop: SIZES.xxs,
    fontSize: 12,
  },
  iconBadge: {
    position: "absolute",
    top: -5,
    left: "58%",
  },
  iconContainer: {
    backgroundColor: "#FDEAF3",
    padding: SIZES.xxs,
    borderRadius: 50,
    overflow: "hidden",
  },
  cardContainer: {
    marginBottom: SIZES.md,
    borderRadius: SIZES.sm,
    backgroundColor: COLORS.white,
    padding: SIZES.md,
    paddingBottom: 0,
  },
});
