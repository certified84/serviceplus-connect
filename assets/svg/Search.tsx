import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Search = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G
      stroke="#545454"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M7.875 14.625a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5ZM12.938 12.938l3.937 3.937" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Search;
