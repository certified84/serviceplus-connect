import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import Bell from "../assets/svg/Bell";
import Bookmark from "../assets/svg/Bookmark";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import Palm from "../assets/svg/Palm";
import Search from "../assets/svg/Search";
import SearchFilter from "../assets/svg/SearchFilter";
import { Ionicons } from "@expo/vector-icons";
import LocationPin from "../assets/svg/LocationPin";
import Location from "../assets/svg/Location";
import Cleaning from "../assets/svg/categories/Cleaning";
import Category from "../components/Category";
import Repairing from "../assets/svg/categories/Repairing";
import Painting from "../assets/svg/categories/Painting";
import Laundry from "../assets/svg/categories/Laundry";
import Appliance from "../assets/svg/categories/Appliance";
import Plumbing from "../assets/svg/categories/Plumbing";
import Movers from "../assets/svg/categories/Movers";
import MenShaving from "../assets/svg/categories/MenShaving";
import SpecialOffer from "../components/SpecialOffer";
import Service from "../components/Service";
import Chip from "../components/Chip";
import { RouteProp, NavigationProp } from "@react-navigation/native";
import { services } from "../store/dummy";

type ScreenRouteProp = RouteProp<StackParamList, "HomeScreen">;
type NavProp = NavigationProp<StackParamList, "HomeScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

interface IValueProps {
  searchText: string;
  specialOffers: number[];
  serviceTypes: string[];
  selected: number;
  bookmarks: string[];
}

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const [values, setValues] = useState<IValueProps>({
    searchText: "",
    specialOffers: [1, 2, 3, 4, 5],
    serviceTypes: [
      "All",
      "Cleaning",
      "Reparing",
      "Painting",
      "Laundry",
      "Appliance",
      "Plumbing",
      "Movers",
      "Men Shaving",
    ],
    selected: 0,
    bookmarks: ["0", "3"],
  });

  async function bookmarkService(bookmarked: boolean, id: string) {
    let bookmarks = values.bookmarks;
    bookmarked
      ? bookmarks.push(id)
      : bookmarks.splice(bookmarks.indexOf(id), 1);
      console.log(bookmarked)
    setValues({ ...values, bookmarks });
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Avatar.Image
          source={{ uri: "https://source.unsplash.com/random/?car,porshe" }}
          size={50}
        />
        <View style={{ marginStart: SIZES.xxs }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...TYPOGRAPHY.p, paddingEnd: 4 }}>Good Morning</Text>
            <Palm />
          </View>
          <Text style={TYPOGRAPHY.h3}>Chaitanya Goyal</Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <TouchableOpacity style={{ padding: 4 }} activeOpacity={0.5}>
            <Bell />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.5}
            onPress={() =>
              navigation?.navigate("BookmarksScreen", {
                bookmarks: values.bookmarks,
              })
            }
          >
            <Bookmark />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ paddingHorizontal: SIZES.md, marginVertical: SIZES.md }}
      >
        <TextInput
          autoCapitalize="none"
          autoComplete="off"
          placeholder="Search..."
          theme={{ roundness: SIZES.xs }}
          left={
            <TextInput.Icon
              icon={() => (
                <TextInput.Icon
                  icon={() => (
                    <View style={{ marginBottom: SIZES.xs }}>
                      <Search />
                    </View>
                  )}
                />
              )}
            />
          }
          right={
            <TextInput.Icon
              icon={() => (
                <TextInput.Icon
                  icon={() => (
                    <View style={{ marginBottom: SIZES.xs }}>
                      <SearchFilter />
                    </View>
                  )}
                />
              )}
            />
          }
          style={styles.textInputField}
          mode="outlined"
          autoCorrect={false}
          outlineColor="#F5F5F5"
          activeOutlineColor={"#545454"}
          placeholderTextColor={"#545454"}
          textColor={COLORS.black}
          value={values.searchText}
          onChangeText={(searchText) => {
            setValues({ ...values, searchText });
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.locationContainer}>
            <LocationPin />
            <Text style={{ ...TYPOGRAPHY.p, marginStart: 4 }} numberOfLines={1}>
              267 New AVenue Park.Indore In...
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.locatorContainer}>
            <Location />
          </TouchableOpacity>
        </View>

        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h3}>Special Offers</Text>
          <TouchableOpacity activeOpacity={0.5} style={{ padding: 4 }}>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.specialOfferContainer}>
          <FlatList
            data={values.specialOffers}
            renderItem={() => <SpecialOffer />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h3}>Categories</Text>
          <TouchableOpacity activeOpacity={0.5} style={{ padding: 4 }}>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsRow}>
          <Category text="Cleaning" icon={<Cleaning />} onPress={() => {}} />
          <Category text="Repairing" icon={<Repairing />} onPress={() => {}} />
          <Category
            text="Painting"
            icon={<Painting />}
            badge="New"
            onPress={() => {}}
          />
          <Category text="Laundry" icon={<Laundry />} onPress={() => {}} />
        </View>

        <View style={styles.iconsRow}>
          <Category
            text="Appliance"
            icon={<Appliance />}
            badge="New"
            onPress={() => {}}
          />
          <Category text="Plumbing" icon={<Plumbing />} onPress={() => {}} />
          <Category text="Movers" icon={<Movers />} onPress={() => {}} />
          <Category
            text="MenShaving"
            icon={<MenShaving />}
            onPress={() => {}}
          />
        </View>

        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h3}>Recommended Services</Text>
          <TouchableOpacity style={{ padding: 4 }}>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>

        {services.map((item) => (
          <Service
            key={item.id}
            service={item}
            bookmarked={values.bookmarks.includes(item.id)}
            onBookmark={bookmarkService}
          />
        ))}

        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h3}>Discover & Explore Services</Text>
          <TouchableOpacity style={{ padding: 4 }}>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {values.serviceTypes.map((item, index) => (
            <Chip
              key={index}
              index={index}
              selected={index === values.selected}
              text={item}
              onPress={(index) => setValues({ ...values, selected: index })}
            />
          ))}
        </ScrollView>

        {services.map((item) => (
          <Service
            key={item.id}
            service={item}
            bookmarked={values.bookmarks.includes(item.id)}
            onBookmark={bookmarkService}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.md,
  },
  locationContainer: {
    flex: 0.82,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: SIZES.xs,
    borderColor: "#E7E8EA",
    height: 50,
    alignItems: "center",
    paddingHorizontal: SIZES.xxs,
    borderWidth: 1,
  },
  locatorContainer: {
    flex: 0.16,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: SIZES.xs,
    borderColor: "#E7E8EA",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.xxs,
    borderWidth: 1,
  },
  seeAllContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.md,
  },
  specialOfferContainer: {
    borderRadius: 30,
    backgroundColor: "black",
    // paddingHorizontal: SIZES.md,
    overflow: "hidden",
  },
  textInputField: {
    backgroundColor: "#F5F5F5",
    color: COLORS.black,
    marginBottom: SIZES.sm,
  },
  iconsRow: {
    marginVertical: SIZES.xs,
    flexDirection: "row",
    gap: 4,
  },
});
