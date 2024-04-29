import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Cleaning from "../assets/svg/categories/Cleaning";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { ReactNode } from "react";
import { Badge } from "react-native-paper";

type Props = {
  text: string;
  icon: ReactNode;
  onPress: () => void;
  badge?: string;
};
const Category: React.FC<Props> = ({ text, icon, onPress, badge }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.iconCol}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text numberOfLines={1} style={styles.iconText}>
        {text}
      </Text>
      {badge && (
        <Badge size={15} style={styles.iconBadge}>
          {badge}
        </Badge>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconCol: {
    flex: 0.25,
    alignItems: "center",
  },
  iconText: {
    ...TYPOGRAPHY.p,
    textAlign: "center",
  },
  iconContainer: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.xxs,
    borderRadius: 50,
    overflow: "hidden",
  },
  iconBadge: {
    fontFamily: "outfit-md",
    fontSize: SIZES.xxs,
    position: "absolute",
    top: -5,
    left: "58%",
  },
});

export default Category;
