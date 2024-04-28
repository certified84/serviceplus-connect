import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Profile = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#545454"
      strokeWidth={1.5}
      d="M10 8.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
    />
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.665 15c.002-.137.002-.276.002-.417 0-2.07-2.985-3.75-6.667-3.75s-6.667 1.68-6.667 3.75c0 2.071 0 3.75 6.667 3.75 1.86 0 3.2-.13 4.167-.364"
    />
  </Svg>
);
export default Profile;
