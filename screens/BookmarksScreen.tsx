import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
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

type ScreenRouteProp = RouteProp<StackParamList, "BookmarksScreen">;
type NavProp = NavigationProp<StackParamList, "BookmarksScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const BookmarksScreen: React.FC<Props> = ({ route, navigation }) => {
  const [values, setValues] = useState({
    bookmarks: route?.params.bookmarks ?? [],
  });

  async function bookmarkService(bookmarked: boolean, id: string) {
    let bookmarks = values.bookmarks;
    bookmarked
      ? bookmarks.push(id)
      : bookmarks.splice(bookmarks.indexOf(id), 1);
    setValues({ ...values, bookmarks });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="My Bookmarks" showOptions />
      {values.bookmarks!.length > 0 ? (
        <ScrollView style={styles.innerContainer}>
          {services
            .filter((item) => values.bookmarks.includes(item.id))
            .map((item) => (
              <Service
                key={item.id}
                service={item}
                bookmarked
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

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight ?? 0,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: SIZES.md,
    marginVertical: SIZES.md,
  },
});
