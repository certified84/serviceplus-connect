import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Bookmark = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 11.098v4.993c0 3.096 0 4.645.734 5.321.35.323.792.526 1.263.58.987.113 2.14-.907 4.445-2.946 1.02-.901 1.529-1.352 2.118-1.47.29-.06.59-.06.88 0 .59.118 1.099.569 2.118 1.47 2.305 2.039 3.458 3.059 4.445 2.945.47-.053.913-.256 1.263-.579.734-.676.734-2.224.734-5.321v-4.994c0-4.288 0-6.432-1.318-7.765C18.364 2 16.242 2 12 2 7.757 2 5.636 2 4.318 3.332 3.511 4.148 3.198 5.27 3.077 7M15 6H9"
    />
  </Svg>
);
export default Bookmark;
