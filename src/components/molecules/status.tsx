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
          Your Profile Score :- {props.value.toFixed(2)} High Risk
        </Text>
      );
    case 2:
    case 3:
      return (
        <Text
          style={[
            $statusTextStyle,
            {
              color: AppColors.warning,
            },
          ]}>
          Your Profile Score :- {props.value.toFixed(2)} Medium Risk
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
          Your Profile Score :- {props.value.toFixed(2)} Low Risk
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
