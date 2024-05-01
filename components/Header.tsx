import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";
import Back from "../assets/svg/Back";
import More from "../assets/svg/More";

type Props = {
  navigation: any;
  title: string;
  showOptions?: boolean;
};

const Header: React.FC<Props> = ({
  navigation,
  title,
  showOptions = false,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation?.goBack()}
      style={styles.btnBack}
    >
      <Back />
    </TouchableOpacity>
    <Text style={TYPOGRAPHY.h2}>{title}</Text>
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={!showOptions}
      style={{ ...styles.btnMore, opacity: showOptions ? 1 : 0 }}
    >
      <More />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.md,
    alignItems: "center",
  },
  btnBack: {
    width: 45,
    height: 45,
    borderRadius: SIZES.xs,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  btnMore: {
    width: 45,
    height: 45,
    borderRadius: SIZES.xs,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#333333",
  },
});
