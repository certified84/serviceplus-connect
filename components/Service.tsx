import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SHADOWS, SIZES, TYPOGRAPHY } from "../theme";
import Bookmark from "../assets/svg/Bookmark";
import Star from "../assets/svg/Star";
import { formatMoney } from "../constants/util";

type Props = {
  service: Service;
  bookmarked?: boolean;
  onBookmark: (bookmarked: boolean, id: string) => void;
};

const Service: React.FC<Props> = ({
  service,
  bookmarked = false,
  onBookmark,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://source.unsplash.com/random/?car,porshe" }}
        style={styles.img}
      />
      <View style={styles.innerContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...TYPOGRAPHY.p, marginTop: 4 }}>Kylee Danford</Text>
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.5}
            onPress={() => onBookmark(!bookmarked, service.id)}
          >
            <Bookmark fill={bookmarked ? "black" : "white"} />
          </TouchableOpacity>
        </View>
        <Text numberOfLines={1} style={TYPOGRAPHY.h3}>
          {service.title}
        </Text>
        <Text numberOfLines={1} style={TYPOGRAPHY.h3}>
          {formatMoney(service.price)}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Star />
          <Text
            style={{ ...TYPOGRAPHY.p, marginStart: SIZES.xxs }}
            numberOfLines={1}
          >
            {service.rating} | {service.reviewCount.toLocaleString()} reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    ...SHADOWS.medium,
    flexDirection: "row",
    borderRadius: SIZES.sm,
    padding: SIZES.sm,
    marginBottom: SIZES.xs,
    backgroundColor: "white",
  },
  img: {
    height: 100,
    width: 90,
    borderRadius: SIZES.xs,
    backgroundColor: "green",
  },
  innerContainer: {
    flex: 1,
    marginStart: SIZES.sm,
    justifyContent: "space-between",
  },
});
