import React from 'react';
import {AppColors} from '../../theme/colors';
import {Text} from '../atom';
import {TextStyle, View} from 'react-native';
interface ButtonProps {
  value: number;
}

export const StatusText: React.FC<ButtonProps> = props => {
  switch (Math.ceil(props.value)) {
    case 1:
      return (
        <Text
          style={[
            $statusTextStyle,
            {
              color: AppColors.danger,
            },
          ]}>
          Your Profile is Very risk-averse {props.value.toFixed(2)}
        </Text>
      );
    case 2:
      return (
        <Text
          style={[
            $statusTextStyle,
            {
              color: AppColors.warning,
            },
          ]}>
          Your Profile is Somewhat risk-averse {props.value.toFixed(2)}
        </Text>
      );
    case 3:
      return (
        <Text
          style={[
            $statusTextStyle,
            {
              color: AppColors.neutral,
            },
          ]}>
          Your Profile is Neutral to risk-tolerant {props.value.toFixed(2)}
        </Text>
      );
    case 4:
      return (
        <Text
          style={[
            $statusTextStyle,
            {
              color: AppColors.success,
            },
          ]}>
          Your Profile is Very risk-tolerant {props.value.toFixed(2)}
        </Text>
      );
    default:
      return <View></View>;
  }
};

const $statusTextStyle: TextStyle = {
  fontSize: 12,
  fontWeight: 'bold',
  alignSelf: 'center',
};
