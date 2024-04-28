import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const More = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01"
    />
    <Path
      stroke="#545454"
      strokeWidth={2}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);
export default More;
