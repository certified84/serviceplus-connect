import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Plumbing = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M23.33 1.49h-.324V.374A.373.373 0 0 0 22.634 0H19.75a.373.373 0 0 0-.372.373V1.49h-.423a.373.373 0 0 0-.372.372v1.193c0 .206.167.373.372.373h.423v1.118a.373.373 0 1 0 .745 0V3.429h2.137v5.39c0 2.261-1.84 4.1-4.1 4.1h-2.807v-2.236h2.907a1.865 1.865 0 0 0 1.863-1.863V6.534a.373.373 0 1 0-.745 0V8.82a1.12 1.12 0 0 1-1.118 1.118h-2.907v-.522a.373.373 0 0 0-.373-.373H13.79a.373.373 0 0 0-.373.373v.522h-.845V7.304h.4a1.368 1.368 0 0 0 2.68-.373c.001-.753-.612-1.366-1.365-1.366-.625 0-1.152.421-1.315.994h-1.545a1.369 1.369 0 0 0-1.314-.994c-.754 0-1.367.613-1.367 1.367 0 .753.613 1.366 1.367 1.366.624 0 1.151-.42 1.314-.994h.4v2.634h-.845v-.522a.373.373 0 0 0-.372-.373H9.416a.373.373 0 0 0-.373.373v.522H5.938a4.85 4.85 0 0 0-4.845 4.845v1.689a.373.373 0 1 0 .745 0v-1.69c0-2.26 1.84-4.099 4.1-4.099h3.105v2.236H5.838a1.865 1.865 0 0 0-1.863 1.864v5.689H1.838V18.46a.373.373 0 0 0-.745 0v2.012H.671a.373.373 0 0 0-.373.373v1.192c0 .206.167.373.373.373h.422v1.118c0 .206.167.373.373.373h2.882a.373.373 0 0 0 .372-.373V22.41h.323a.373.373 0 0 0 .373-.373v-1.192a.373.373 0 0 0-.373-.373H4.72v-5.69a1.12 1.12 0 0 1 1.118-1.117h3.205v.521c0 .206.167.373.373.373h1.193a.373.373 0 0 0 .372-.373v-.521h2.435v.521c0 .206.167.373.373.373h1.192a.373.373 0 0 0 .373-.373v-.521h2.807a4.85 4.85 0 0 0 4.845-4.845V3.429h.323a.373.373 0 0 0 .373-.373V1.863a.373.373 0 0 0-.373-.372Zm-9.044 4.82a.622.622 0 1 1-.002 1.244.622.622 0 0 1 .002-1.243Zm-4.174 1.243a.622.622 0 1 1 .001-1.244.622.622 0 0 1-.001 1.244ZM3.975 23.155H1.838v-.745h2.137v.745Zm.696-1.49H1.043v-.448h3.628v.448Zm5.565-7.851h-.447V9.789h.447v4.025Zm3.18-.895h-2.435v-2.236h2.435v2.236Zm1.193.895h-.448V9.789h.448v4.025ZM20.124.745h2.137v.746h-2.137V.745Zm2.832 1.938H19.33v-.447h3.627v.447Z" />
      <Path d="M14.14 17.476a.373.373 0 0 0-.644.377c1.055 1.797 1.212 2.584 1.212 2.892a2.512 2.512 0 0 1-2.51 2.51 2.512 2.512 0 0 1-2.509-2.51c0-1.071 1.604-3.61 2.509-4.918.132.191.3.438.484.72a.373.373 0 0 0 .623-.41c-.45-.686-.79-1.156-.805-1.176a.376.376 0 0 0-.603 0c-.302.417-2.953 4.12-2.953 5.784A3.258 3.258 0 0 0 12.2 24a3.258 3.258 0 0 0 3.255-3.255c0-.692-.43-1.762-1.315-3.269Z" />
      <Path d="M13.11 18.08a.373.373 0 1 0-.642.377c1.01 1.723 1.046 2.27 1.047 2.288 0 .726-.59 1.317-1.316 1.317a.373.373 0 1 0 0 .745 2.064 2.064 0 0 0 2.062-2.062c0-.165-.083-.846-1.15-2.665Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Plumbing;