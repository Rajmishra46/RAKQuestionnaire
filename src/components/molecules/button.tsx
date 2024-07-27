import React, {useContext} from 'react';
import {Text} from '../atom';
import {ThemeContext} from '../../providers/themeProvider';
import {Pressable, ViewStyle} from 'react-native';
interface ButtonProps {
  style?: ViewStyle | undefined;
  children: React.ReactNode | undefined;
  onPress: () => void;
  disabled?: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = props => {
  const themeContext = useContext(ThemeContext);
  return (
    <Pressable
      disabled={props.disabled}
      style={[$buttonStyle, {backgroundColor: themeContext?.theme.buttonColor}]}
      onPress={() => props.onPress()}>
      <Text
        style={{color: themeContext?.theme.buttonText, fontSize: 18}}
        variant={undefined}
        children={props.children}
      />
    </Pressable>
  );
};

const $buttonStyle: ViewStyle = {
  paddingVertical: 15,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  width: '100%',
};
