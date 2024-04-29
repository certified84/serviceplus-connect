import { ImageBackground, View, Text } from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";

const SpecialOffer = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        // marginEnd: 4,
        // borderRadius: 30,
        // backgroundColor: "black",
        paddingHorizontal: SIZES.md,
        // overflow: "hidden",
      }}
      source={require("../assets/images/special_offer.png")}
    >
      <View
        style={{
          width: "50%",
          marginVertical: SIZES.xl,
          marginHorizontal: SIZES.xxs,
        }}
      >
        <Text style={{ ...TYPOGRAPHY.h1, fontSize: 40, color: "white" }}>
          30 %
        </Text>
        <Text
          style={{
            ...TYPOGRAPHY.h3,
            color: "white",
            marginVertical: SIZES.xxs,
          }}
        >
          Today Special
        </Text>
        <Text style={{ ...TYPOGRAPHY.p, color: "white" }}>
          Get discount for every order, only valid for today
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SpecialOffer;
