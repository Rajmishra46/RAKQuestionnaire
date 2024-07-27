import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CheckIcon = (props: SvgProps) => (
  <Svg {...props} fill="none" viewBox="0 -0.5 25 25">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.5 12.5 4.667 4.5L19.5 8"
    />
  </Svg>
);
export default CheckIcon;
