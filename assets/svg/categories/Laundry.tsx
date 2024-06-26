import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Laundry = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25.75H3.75a1.5 1.5 0 0 0-1.5 1.5v19.5a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V2.25a1.5 1.5 0 0 0-1.5-1.5ZM5.25 3.75h3M19 3.2v1M16 3.2v1M2.25 6.75h19.5"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 15a2.25 2.25 0 0 1 2.195-2.25"
    />
  </Svg>
);
export default Laundry;
