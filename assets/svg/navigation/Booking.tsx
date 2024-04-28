import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Booking = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2.5 11.667V8.333c0-3.142 0-4.714.977-5.69.975-.976 2.547-.976 5.69-.976h1.666c3.143 0 4.714 0 5.69.976.545.544.786 1.274.892 2.357m.085 3.333v3.334c0 3.142 0 4.714-.977 5.69-.976.976-2.547.976-5.69.976H9.167c-3.143 0-4.715 0-5.69-.976-.545-.544-.786-1.274-.892-2.357m4.082-3.333h4.166M6.667 8.333H7.5m5.833 0H10"
    />
  </Svg>
);
export default Booking;
