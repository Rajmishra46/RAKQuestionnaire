import React from 'react';
import {View, ViewStyle} from 'react-native';
import {AppColors} from '../../theme/colors';
import {Text} from '../atom';

type PreviewProps = {
  status: number;
  ans: string;
};
export const Preview: React.FC<PreviewProps> = props => {
  switch (props?.status) {
    case 4:
      return (
        <View style={$statusContainer}>
          <Text style={{flex: 1}}>A - {props?.ans}</Text>
          <View style={$statusView}>
            <View
              style={[$statusStyle, {backgroundColor: AppColors.success}]}
            />
            <Text>Very risk-tolerant</Text>
          </View>
        </View>
      );
    case 3:
      return (
        <View style={$statusContainer}>
          <Text style={{flex: 1}}>A - {props?.ans}</Text>
          <View style={$statusView}>
            <View
              style={[$statusStyle, {backgroundColor: AppColors.neutral}]}
            />
            <Text>Neutral Somewhat risk-tolerant</Text>
          </View>
        </View>
      );
    case 2:
      return (
        <View style={$statusContainer}>
          <Text style={{flex: 1}}>A - {props?.ans}</Text>
          <View style={$statusView}>
            <View
              style={[$statusStyle, {backgroundColor: AppColors.warning}]}
            />
            <Text>Somewhat risk-averse</Text>
          </View>
        </View>
      );
    case 1:
      return (
        <View style={$statusContainer}>
          <Text style={{flex: 1}}>A - {props?.ans}</Text>
          <View style={$statusView}>
            <View style={[$statusStyle, {backgroundColor: AppColors.danger}]} />
            <Text>Very Risk-Averse</Text>
          </View>
        </View>
      );
    default:
      return null;
  }
};

const $statusStyle: ViewStyle = {
  height: 10,
  width: 10,
  borderRadius: 5,
  margin: 4,
  alignSelf: 'center',
};

const $statusContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'flex-start',
  flex: 1,
};
const $statusView: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1 / 2.5,
};
