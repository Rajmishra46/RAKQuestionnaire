import React, {useContext, useEffect} from 'react';
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  BackHandler,
  Alert,
} from 'react-native';
import {AppConstants} from '../utils/constants';
import {Text} from '../components/atom';
import {Button} from '../components/molecules';
import {AppStackScreenProps} from '../navigators/AppNavigator';
import {ThemeContext} from '../providers/themeProvider';
import {Toggle} from '../components/molecules/toggle';
import Animated, {FadeInDown} from 'react-native-reanimated';

interface IntroProps extends AppStackScreenProps<'Intro'> {}

export const Intro: React.FC<IntroProps> = ({navigation}) => {
  const introImg = require('../assets/images/rkImage.png');
  const themeContext = useContext(ThemeContext);

  function handleBackButtonClick() {
    Alert.alert('Exit', 'Exit Questionnaire ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return (
    <View style={$introContainer}>
      <Toggle />
      <Image source={introImg} style={$introImg} />
      <View
        style={[
          {backgroundColor: themeContext?.theme.backgroundColor},
          $container,
        ]}>
        <Animated.Text
          entering={FadeInDown.duration(1000)}
          style={{color: 'red', fontSize: 42}}>
          Risk <Text>Profile Questionnaire</Text>
        </Animated.Text>
        <Button
          onPress={() => {
            navigation.navigate('Questionnaire');
          }}
          children={'Get Started'}
        />
      </View>
    </View>
  );
};

const $introContainer: ViewStyle = {
  flex: 1,
};

const $introImg: ImageStyle = {
  width: AppConstants.width,
  height: AppConstants.height / 2,
};
const $container: ViewStyle = {
  flex: 1,
  display: 'flex',
  padding: 16,
  justifyContent: 'space-between',
};
