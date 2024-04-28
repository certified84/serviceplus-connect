import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Repairing = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M18.275 12.468c1.53 0 2.969-.597 4.052-1.68a5.767 5.767 0 0 0 1.155-6.449 1.048 1.048 0 0 0-.943-.604c-.277 0-.538.107-.736.304l-1.685 1.687-.786-.061-.06-.787 1.683-1.685a1.037 1.037 0 0 0-.301-1.68A5.793 5.793 0 0 0 18.26.99c-1.53 0-2.97.596-4.053 1.678a5.689 5.689 0 0 0-1.44 5.696l-.757.756-7.829-7.828a.918.918 0 0 0-1.262 0L.261 3.95a.893.893 0 0 0 0 1.262L8.09 13.04l-5.385 5.385c-.922.923-.93 2.416-.017 3.33l.552.553c.44.44 1.026.682 1.65.682.633 0 1.23-.247 1.68-.697l6.92-6.921 7.97 7.374a.892.892 0 1 0 1.263-1.262l-7.97-7.375 1.88-1.881a5.74 5.74 0 0 0 1.643.239ZM2.155 4.58 3.55 3.186l7.198 7.198-1.396 1.395-7.197-7.198Zm13.477 5.71-5.621 5.621h-.005l-4.91 4.91a.296.296 0 0 1-.21.088.25.25 0 0 1-.177-.07l-.553-.552c-.102-.103-.092-.276.02-.389L8.974 15.1l.11-.112 5.623-5.625c.303-.307.387-.76.213-1.152a3.64 3.64 0 0 1 .756-4.072 3.624 3.624 0 0 1 2.462-1.067l-.674.674a1.04 1.04 0 0 0-.303.816l.166 2.15c.04.513.44.916.957.957l2.141.165a1.05 1.05 0 0 0 .824-.301l.673-.673a3.65 3.65 0 0 1-5.134 3.217 1.042 1.042 0 0 0-1.157.214Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Repairing;
