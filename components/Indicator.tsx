import { View } from "react-native";
import { SIZES } from "../theme";

type Props = {
  selected: boolean;
};

const Indicator: React.FC<Props> = ({ selected }) => (
  <View
    style={{
      height: SIZES.xxs,
      width: selected ? SIZES.lg : SIZES.xxs,
      borderRadius: SIZES.xxs,
      backgroundColor: selected ? "white" : "#CFCACA",
      marginHorizontal: 4,
      overflow: "hidden",
    }}
  ></View>
);

export default Indicator;
