import React from 'react';
import {View} from 'react-native';
import CheckIcon from '../../assets/checkIcon';
interface CheckBoxProps {
  checked?: boolean;
  fillColor?: string | 'black';
}

export const CheckBox: React.FC<CheckBoxProps> = props => {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: props.checked ? props.fillColor : 'transparent',
      }}>
      {props.checked && <CheckIcon width={15} height={15} />}
    </View>
  );
};
