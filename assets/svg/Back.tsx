import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Back = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 12 6 6m-6-6 6-6m-6 6h10.5m5.5 0h-2.5"
    />
  </Svg>
);
export default Back;
