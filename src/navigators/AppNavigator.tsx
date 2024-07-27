/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
    NavigationContainer,
    NavigatorScreenParams,
  } from '@react-navigation/native';
  import {
    NativeStackScreenProps,
    createNativeStackNavigator,
  } from '@react-navigation/native-stack';
  import { Intro } from '../screens/intro';
  import { QuestionnaireSC } from '../screens/questionairre';
  import { SummarySC } from '../screens/summary';
  
  
  export type AppStackParamList = {
    Intro: undefined;
    Questionnaire: undefined;
    Summary: undefined;
  };
  
  export type AppStackScreenProps<T extends keyof AppStackParamList> =
    NativeStackScreenProps<AppStackParamList, T>;
  
  // react native stack navigator based on app
  const Stack = createNativeStackNavigator<AppStackParamList>();
  
  function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false, headerLeft: () => null}}
          name="Questionnaire"
          component={QuestionnaireSC}
        />
        <Stack.Screen
           options={{headerShown: false, headerLeft: () => null}}
          name="Summary"
          component={SummarySC}
        />
      </Stack.Navigator>
    );
  }
  
  export interface NavigationProps
    extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
  
  export const AppNavigator = () => {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  };
  