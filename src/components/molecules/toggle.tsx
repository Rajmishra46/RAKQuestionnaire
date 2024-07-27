import React, {useContext} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import {ThemeContext} from '../../providers/themeProvider';
import ToggleIcon from '../../assets/images/toggleIcon';
import ToggleNight from '../../assets/images/toggleNight';
interface ToggleProps {
  style?: ViewStyle | undefined;
}

export const Toggle: React.FC<ToggleProps> = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Pressable
      style={{flex: 1, position: 'absolute', top: 10, right: 10, zIndex: 100}}
      onPress={themeContext?.toggleTheme}>
      {themeContext?.isDark ? (
        <ToggleIcon width={30} height={30} />
      ) : (
        <ToggleNight width={30} height={30} />
      )}
    </Pressable>
  );
};
