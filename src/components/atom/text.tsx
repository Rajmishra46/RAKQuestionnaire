import React, {useContext} from 'react';
import {Text as RCText, TextStyle} from 'react-native';
import {ThemeContext} from '../../providers/themeProvider';
interface TextProps {
  variant?: string | undefined;
  style?: any | undefined;
  children?: React.ReactNode | undefined;
}

export const Text: React.FC<TextProps> = props => {
  const themeContext = useContext(ThemeContext);
  return (
    <RCText
      allowFontScaling={false}
      style={[
        {color: themeContext?.theme.textColor},
        $textStyle,
        props?.style,
      ]}>
      {props.children}
    </RCText>
  );
};

const $textStyle: TextStyle = {
  textAlign: 'left',
};
