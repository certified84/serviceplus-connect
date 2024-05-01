import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SIZES } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import { services } from "../store/dummy";
import Service from "../components/Service";
import { useState } from "react";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "ServicesScreen">;
type NavProp = NavigationProp<StackParamList, "ServicesScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const ServicesScreen: React.FC<Props> = ({ route, navigation }) => {
  const category = route?.params.category;

  const [values, setValues] = useState({
    bookmarks: route?.params.bookmarks,
    services: services.filter((item) => item.type === category?.type),
  });

  async function bookmarkService(bookmarked: boolean, id: string) {
    let bookmarks = values.bookmarks;
    bookmarked
      ? bookmarks?.push(id)
      : bookmarks?.splice(bookmarks.indexOf(id), 1);
    setValues({ ...values, bookmarks });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title={category?.title ?? ""}
        showOptions
      />
      {values.services!.length > 0 ? (
        <ScrollView style={styles.innerContainer}>
          {values.services.map((item) => (
            <Service
              key={item.id}
              service={item}
              bookmarked={values.bookmarks?.includes(item.id)}
              onBookmark={bookmarkService}
            />
          ))}
        </ScrollView>
      ) : (
        <EmptyDesign />
      )}
    </SafeAreaView>
  );
};

export default ServicesScreen;

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
});
