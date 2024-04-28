import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Cleaning = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      clipPath="url(#a)">
      <Path d="M10.5 12.75V2.25c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v10.5M10.5 10.5h3M19.5 23.25h-15l2.025-9.3c.15-.675.75-1.2 1.5-1.2h8.1c.675 0 1.35.525 1.5 1.2l1.875 9.3ZM6.75 15.75h10.5M8.25 20.25v2.25M15.75 21.75v.75" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Cleaning;
