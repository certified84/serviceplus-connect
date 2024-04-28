import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Location = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21.5 12h-2.111m0 0A7.388 7.388 0 0 1 12 19.389M19.389 12A7.39 7.39 0 0 0 12 4.611M12 2.5v2.111m0 0a7.388 7.388 0 1 0 0 14.778M2.5 12h2.111M12 21.5v-2.111"
    />
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 16.222a4.222 4.222 0 1 0 0-8.444 4.222 4.222 0 0 0 0 8.444Z"
    />
  </Svg>
);
export default Location;
