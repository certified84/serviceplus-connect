import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Message = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#545454"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 9.167V8.75m3.333.417V8.75m-6.666.417V8.75m-3.78 5.273c-1.22-.976-1.22-1.714-1.22-4.856 0-3.143 0-4.715 1.22-5.69C4.108 2.5 6.072 2.5 10 2.5c3.928 0 5.893 0 7.113.977 1.22.975 1.22 2.547 1.22 5.69 0 3.142 0 3.88-1.22 4.856C15.893 15 13.928 15 10 15c-2.092 0-3.167 1.448-5 2.5v-2.677c-.912-.136-1.583-.375-2.113-.8Z"
    />
  </Svg>
);
export default Message;
