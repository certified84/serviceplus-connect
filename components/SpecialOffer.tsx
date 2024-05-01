import { ImageBackground, View, Text, StyleSheet, useWindowDimensions, Dimensions } from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";

const SpecialOffer = () => {
  const { width } = Dimensions.get('window')
  return (
    <ImageBackground
      style={{...styles.container, width}}
      resizeMode="cover"
      source={require("../assets/images/special_offer.png")}
    >
      <Text style={{ ...TYPOGRAPHY.h1, fontSize: 40, color: "white" }}>
        30 %
      </Text>
      <Text style={styles.title}>Today Special</Text>
      <Text
        style={{ ...TYPOGRAPHY.p, color: "white", width: 150 }}
        numberOfLines={3}
      >
        Get discount for every order, only valid for today
      </Text>
    </ImageBackground>
  );
};

export default SpecialOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    backgroundColor: "red",
    padding: SIZES.xl,
    // overflow: "hidden",
  },
  title: {
    ...TYPOGRAPHY.h3,
    color: "white",
    marginVertical: SIZES.xxs,
  },
});
