import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LocationPin = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#545454"
      d="M10 11.25A3.125 3.125 0 1 0 10 5a3.125 3.125 0 0 0 0 6.25Zm0-5A1.875 1.875 0 1 1 10 10a1.875 1.875 0 0 1 0-3.75Z"
    />
    <Path
      fill="#545454"
      d="m10 18.75 5.273-6.218.217-.282a6.806 6.806 0 0 0 1.385-4.125 6.875 6.875 0 1 0-13.75 0 6.802 6.802 0 0 0 1.384 4.123l.001.002s.187.246.216.28L10 18.75Zm4.492-7.253-.179.234L10 16.817l-4.319-5.093-.174-.229a5.563 5.563 0 0 1-1.132-3.37 5.625 5.625 0 0 1 11.25 0 5.566 5.566 0 0 1-1.133 3.372Z"
    />
  </Svg>
);
export default LocationPin;
