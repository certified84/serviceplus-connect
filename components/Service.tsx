import { Image, View, Text, TouchableOpacity } from "react-native";
import { SHADOWS, SIZES, TYPOGRAPHY } from "../theme";
import Bookmark from "../assets/svg/Bookmark";
import Star from "../assets/svg/Star";

type Props = {};
const Service: React.FC<Props> = () => {
  return (
    <View
      style={{
        ...SHADOWS.medium,
        flexDirection: "row",
        borderRadius: SIZES.sm,
        padding: SIZES.sm,
        marginBottom: SIZES.xs,
        backgroundColor: "white",
      }}
    >
      <Image
        source={{ uri: "" }}
        style={{
          height: 100,
          width: 90,
          borderRadius: SIZES.xs,
          backgroundColor: "green",
        }}
      />
      <View
        style={{
          flex: 1,
          marginStart: SIZES.sm,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{...TYPOGRAPHY.p, marginTop: 4}}>Kylee Danford</Text>
          <TouchableOpacity style={{ padding: 4 }} activeOpacity={0.5}>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <Text numberOfLines={1} style={TYPOGRAPHY.h3}>
          House Cleaning
        </Text>
        <Text numberOfLines={1} style={TYPOGRAPHY.h3}>
          ₦ 1,100
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Star />
          <Text style={{...TYPOGRAPHY.p, marginStart: SIZES.xxs}} numberOfLines={1}>4.8   |   8,289 reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default Service;
