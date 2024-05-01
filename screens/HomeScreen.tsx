import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  Dimensions,
} from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import Bell from "../assets/svg/Bell";
import Bookmark from "../assets/svg/Bookmark";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import Palm from "../assets/svg/Palm";
import Search from "../assets/svg/Search";
import SearchFilter from "../assets/svg/SearchFilter";
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
import { categories, services } from "../store/dummy";
import { formatGreeting, getRandomSubset } from "../constants/util";
import { Ionicons } from "@expo/vector-icons";
import Indicator from "../components/Indicator";

type ScreenRouteProp = RouteProp<StackParamList, "HomeScreen">;
type NavProp = NavigationProp<StackParamList, "HomeScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

interface IValueProps {
  searchText: string;
  search: boolean;
  specialOffers: number[];
  currentSpecialOffer: number;
  categories: Category[];
  selected: string;
  bookmarks: string[];
  recommendedServices: Service[];
}

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const [values, setValues] = useState<IValueProps>({
    searchText: "",
    search: false,
    specialOffers: [1, 2, 3, 4, 5],
    currentSpecialOffer: 0,
    categories: [
      {
        id: "-1",
        title: "All",
        type: "all",
      },
      ...categories,
    ],
    selected: "all",
    bookmarks: [],
    recommendedServices: [],
  });

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setValues({ ...values, currentSpecialOffer: viewableItems[0].index }); // This line keeps throwing up an error when the phone is rotated
  }).current;

  // next slide need to be 50% on screen before it will change
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useEffect(() => {
    const recommendedServices = getRandomSubset(services, 5);
    setValues({ ...values, recommendedServices });
  }, []);

  async function bookmarkService(bookmarked: boolean, id: string) {
    let bookmarks = values.bookmarks;
    bookmarked
      ? bookmarks.push(id)
      : bookmarks.splice(bookmarks.indexOf(id), 1);
    setValues({ ...values, bookmarks });
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {values.search ? (
        <View style={{ flex: 1 }}>
          <View style={styles.searchHeader}>
            <Ionicons
              style={{ padding: SIZES.xxs, marginBottom: SIZES.xxs }}
              size={30}
              name={Platform.OS === "android" ? "arrow-back" : "chevron-back"}
              onPress={() => setValues({ ...values, search: false })}
            />

            <TextInput
              autoFocus={values.search}
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
              style={{ ...styles.textInputField, flex: 1 }}
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
          </View>

          {services
            .filter((item) => {
              if (values.searchText === "") return false;
              return (
                item.title
                  .toLowerCase()
                  .includes(values.searchText.toLowerCase()) ||
                item.desc
                  .toLowerCase()
                  .includes(values.searchText.toLowerCase()) ||
                item.type
                  .toLowerCase()
                  .includes(values.searchText.toLowerCase())
              );
            })
            .map((item) => (
              <Service
                key={item.id}
                service={item}
                bookmarked={values.bookmarks.includes(item.id)}
                onBookmark={bookmarkService}
              />
            ))}
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation?.navigate("ProfileScreen")}
            >
              <Avatar.Image
                source={{
                  uri: "https://source.unsplash.com/random/?man,porshe",
                }}
                size={50}
              />
            </TouchableOpacity>
            <View style={{ marginStart: SIZES.xxs }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ ...TYPOGRAPHY.p, paddingEnd: 4 }}>
                  {formatGreeting()}
                </Text>
                <Palm />
              </View>
              <Text style={TYPOGRAPHY.h3}>Samson Achiaga</Text>
            </View>
            <View style={styles.bellBookmarkContainer}>
              <TouchableOpacity
                style={{ padding: 4 }}
                activeOpacity={0.5}
                onPress={() => navigation?.navigate("NotificationsScreen")}
              >
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

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setValues({ ...values, search: true })}
            style={styles.searchContainer}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Search />
              <Text style={{ ...TYPOGRAPHY.p, marginStart: SIZES.xs }}>
                Search...
              </Text>
            </View>
            <SearchFilter />
          </TouchableOpacity>

          <ScrollView style={{ paddingHorizontal: SIZES.md }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.locationContainer}>
                <LocationPin />
                <Text
                  style={{ ...TYPOGRAPHY.p, marginStart: 4 }}
                  numberOfLines={1}
                >
                  267 New AVenue Park.Indore In...
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.locatorContainer}
              >
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
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                // getItemLayout={(_, index) => ({
                //   length: Dimensions.get('window').width,
                //   offset: Dimensions.get('window').width * index,
                //   index,
                // })}
              />
              <View style={styles.indicatorContainer}>
                {values.specialOffers.map((index) => (
                  <Indicator
                    key={index}
                    selected={index === values.currentSpecialOffer + 1}
                  />
                ))}
              </View>
            </View>

            <View style={styles.seeAllContainer}>
              <Text style={TYPOGRAPHY.h3}>Categories</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ padding: 4 }}
                onPress={() =>
                  navigation?.navigate("CategoryiesScreen", {
                    bookmarks: values.bookmarks,
                  })
                }
              >
                <Text>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.iconsRow}>
              <Category
                text="Cleaning"
                icon={<Cleaning />}
                onPress={() =>
                  navigation?.navigate("ServicesScreen", {
                    bookmarks: values.bookmarks,
                    category: categories.find(
                      (item) => item.type === "cleaning"
                    ),
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
                    category: categories.find(
                      (item) => item.type === "painting"
                    ),
                  })
                }
              />
              <Category
                text="Laundry"
                icon={<Laundry />}
                onPress={() =>
                  navigation?.navigate("ServicesScreen", {
                    bookmarks: values.bookmarks,
                    category: categories.find(
                      (item) => item.type === "laundry"
                    ),
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
                    category: categories.find(
                      (item) => item.type === "plumbing"
                    ),
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
                    category: categories.find(
                      (item) => item.type === "shaving"
                    ),
                  })
                }
              />
            </View>

            <View style={styles.seeAllContainer}>
              <Text style={TYPOGRAPHY.h3}>Recommended Services</Text>
              <TouchableOpacity style={{ padding: 4 }}>
                <Text>See All</Text>
              </TouchableOpacity>
            </View>

            {values.recommendedServices.map((item) => (
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
              {values.categories.map((item, index) => (
                <Chip
                  key={index}
                  selected={item.type === values.selected}
                  category={item}
                  onPress={(selected) => setValues({ ...values, selected })}
                />
              ))}
            </ScrollView>

            <View style={{ marginTop: SIZES.sm }}>
              {services
                .filter((item) => {
                  if (values.selected === "all") return true;
                  else return item.type === values.selected;
                })
                .map((item) => (
                  <Service
                    key={item.id}
                    service={item}
                    bookmarked={values.bookmarks.includes(item.id)}
                    onBookmark={bookmarkService}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.xs,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.md,
  },
  bellBookmarkContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  searchContainer: {
    backgroundColor: "#F5F5F5",
    color: COLORS.black,
    marginBottom: SIZES.sm,
    borderColor: "#E7E8EA",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: SIZES.xs,
    overflow: "hidden",
    padding: SIZES.sm,
    paddingHorizontal: SIZES.md,
    margin: SIZES.md,
  },
  locationContainer: {
    flex: 0.82,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: SIZES.xs,
    borderColor: "#E7E8EA",
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    paddingHorizontal: SIZES.xxs,
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
    overflow: "hidden",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: SIZES.sm,
    left: 0,
    right: 0,
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
