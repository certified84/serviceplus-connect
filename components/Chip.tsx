import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";

type Props = {
  category: Category,
  selected: boolean;
  onPress: (type: string) => void;
};

const Chip: React.FC<Props> = ({ category, selected, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => (!selected ? onPress(category.type) : {})}
      style={{
        padding: SIZES.xs,
        paddingHorizontal: SIZES.lg,
        backgroundColor: selected ? COLORS.black : COLORS.white,
        borderWidth: selected ? 0 : 1,
        borderColor: "#545454",
        marginEnd: SIZES.xs,
        alignItems: "center",
        minWidth: 60,
        borderRadius: SIZES.xl,
      }}
    >
      <Text
        style={{ ...TYPOGRAPHY.h4, color: selected ? COLORS.white : "#545454" }}
      >
        {category.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
