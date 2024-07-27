import React from 'react';
import {View} from 'react-native';
interface SpacerProps {
  width?: number | undefined;
  height?: number | undefined;
  color?: string | undefined;
}

export const Spacer: React.FC<SpacerProps> = props => {
  return (
    <View
      style={{
        width: props?.width ?? '100%',
        height: props?.height ?? '100%',
        backgroundColor: props?.color,
      }}
    />
  );
};
