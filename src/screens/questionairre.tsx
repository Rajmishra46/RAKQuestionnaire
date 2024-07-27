import React, {useContext, useState} from 'react';
import {View, ViewStyle, FlatList, Pressable} from 'react-native';
import {Questionnaire} from '../utils/constants';
import {AppColors} from '../theme/colors';
import {Button} from '../components/molecules';
import {CheckBox, Spacer, Text} from '../components/atom';
import {AppStackScreenProps} from '../navigators/AppNavigator';
import {useStore} from '../store/store';
import {ThemeContext} from '../providers/themeProvider';
import {Toggle} from '../components/molecules/toggle';

interface QuestionnaireProps extends AppStackScreenProps<'Questionnaire'> {}

export const QuestionnaireSC: React.FC<QuestionnaireProps> = ({navigation}) => {
  const updateOptions = useStore((state: any) => state.updateOptions);
  const [userAns, setUserAns] = useState<any>([]);
  const [currInd, setInd] = useState<number>(0);
  const [selectedInd, setSelectedInd] = useState<any>(null);
  const themeContext = useContext(ThemeContext);

  const handleNextClick = () => {
    if (currInd < Questionnaire.length - 1) {
      setInd(prev => prev + 1);
      if (userAns[currInd + 1]) setSelectedInd([currInd + 1]);
      else setSelectedInd(null);
    } else {
      updateOptions(userAns);
      navigation.reset({
        index: 1,
        routes: [{name: 'Summary'}],
      });
    }
  };

  const handlePrevClick = () => {
    setInd(prev => prev - 1);
    setSelectedInd(userAns[currInd - 1]);
  };

  const itemClick = (points: number, index: number) => {
    let tempAns = userAns;
    tempAns[currInd] = points;
    setUserAns(tempAns);
    setSelectedInd(index);
  };

  return (
    <View
      style={[
        $questionnaireContainer,
        {backgroundColor: themeContext?.theme.backgroundColor},
      ]}>
      <Toggle />
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Questionnaire</Text>
      <Spacer height={20} />
      <Text>
        Question{' '}
        <Text style={{color: AppColors.primaryColor, fontWeight: 'bold'}}>
          {currInd + 1} of {Questionnaire.length}
        </Text>
      </Text>
      <Spacer height={8} />

      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        {Questionnaire[currInd].question}
      </Text>
      <Spacer height={10} />
      <FlatList
        data={Questionnaire[currInd].options}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => itemClick(item.points, index)}
              style={[
                $optionContainer,
                {
                  borderWidth: selectedInd == index ? 2 : 1,
                  borderColor:
                    selectedInd == index
                      ? themeContext?.theme.textColor
                      : AppColors.grey,
                  backgroundColor:
                    selectedInd == index
                      ? themeContext?.theme.primaryShade
                      : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: selectedInd == index ? 'bold' : '200',
                }}>
                {item.ans}
              </Text>
              <CheckBox
                fillColor={AppColors.primaryColor}
                checked={selectedInd == index ? true : false}
              />
            </Pressable>
          );
        }}
      />

      {currInd != 0 && (
        <Button onPress={handlePrevClick} children={'Show Previous'} />
      )}
      <Spacer height={4} />
      <Button
        disabled={selectedInd == null}
        onPress={handleNextClick}
        children={'Next'}
      />
    </View>
  );
};

const $questionnaireContainer: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
  padding: 16,
};

const $optionContainer: ViewStyle = {
  backgroundColor: 'white',
  width: '100%',
  padding: 16,
  marginVertical: 8,
  borderRadius: 12,

  flexDirection: 'row',
  justifyContent: 'space-between',
};
