import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Painting = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M19.456 1.864h.466v2.09l-9.024 3.534a.467.467 0 0 0-.296.434v2.043a1.245 1.245 0 0 1 .932.038V8.24l9.024-3.534a.466.466 0 0 0 .297-.434V1.398a.466.466 0 0 0-.466-.466h-.933v.932ZM11.534 10.565a.739.739 0 0 0-.515-.207c-.16 0-.299.047-.417.125a.871.871 0 0 0-.317.386c-.678 1.557-1.081 9.832-1.081 10.86v.139c0 .57-.065 1.217.356 1.64.324.326.828.492 1.612.492.628 0 1.115-.178 1.447-.53.556-.587.514-1.468.514-1.477-.042-5.09-1.422-11.104-1.436-11.164a.598.598 0 0 0-.163-.264Z" />
      <Path d="M4.078 3.262H18.29a.7.7 0 0 0 .7-.699V.7a.7.7 0 0 0-.7-.699H3.845a.7.7 0 0 0-.7.699V2.33c0 .515.418.932.933.932Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M24 24H0V0h24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Painting;
