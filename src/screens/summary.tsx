import React, { useContext } from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import {AppStackScreenProps} from '../navigators/AppNavigator';
import {PieChart, ProgressChart} from 'react-native-chart-kit';
import {AppConstants, Questionnaire} from '../utils/constants';
import {Spacer, Text} from '../components/atom';
import {useStore} from '../store/store';
import {AppColors} from '../theme/colors';
import {Button, Preview} from '../components/molecules';
import {Svg, Circle, Path} from 'react-native-svg';
import { StatusText } from '../components/molecules/status';
import { ThemeContext } from '../providers/themeProvider';
import { Toggle } from '../components/molecules/toggle';

interface SummaryProps extends AppStackScreenProps<'Summary'> {}

export const SummarySC: React.FC<SummaryProps> = ({navigation}) => {
  const userOptions = useStore((state: any) => state.userOptions);
  const updateOptions = useStore((state: any) => state.updateOptions);
  const userReportVal = userOptions.reduce(
    (accumulator: any, currentValue: any) => accumulator + currentValue,
    0,
  );
  const themeContext = useContext(ThemeContext);
  const avgData = {
    labels: ['User Profile'], // optional
    data: [userReportVal / (4 * 6)],
  };
  console.log(userOptions)
  const data = [
    {
      name: 'Very risky',
      points: userOptions.filter((e: number) => e == 1).length,
      color: AppColors.danger,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Somewhat risky',
      points: userOptions.filter((e: number) => e == 2).length,
      color: AppColors.warning,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Neutral risk',
      points: userOptions.filter((e: number) => e == 3).length,
      color: AppColors.neutral,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Very risk tolerant',
      points: userOptions.filter((e: number) => e == 4).length,
      color: AppColors.success,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  return (
    <ScrollView horizontal={false} style={[$settingsContainer,{backgroundColor:themeContext?.theme.backgroundColor}]}>
    <Toggle/>
      <View
        style={{
          borderRadius: 8,
          padding: 8,
          flexWrap: 'wrap',
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Risk Calculation</Text>
        <PieChart
          data={data}
          width={AppConstants.width - 36}
          height={180}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            useShadowColorFromDataset: false, // optional
          }}
          accessor={'points'}
          backgroundColor={'transparent'}
          center={[0, 0]}
          paddingLeft='0'
        />
        <ProgressChart
          data={avgData}
          width={AppConstants.width - 36}
          height={180}
          strokeWidth={18}
          radius={48}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#fff',
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => {
              if (Math.ceil(userReportVal / 6) == 1)
                return `rgba(255, 0, 0, ${opacity})`;
              if (Math.ceil(userReportVal / 6) == 2)
                return `rgba(255, 99, 71, ${opacity})`;
              if (Math.ceil(userReportVal / 6) == 3)
                return `rgba(255, 165, 0, ${opacity})`;
              else return `rgba(26, 255, 146, ${opacity})`;
            },
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
          }}
          hideLegend={true}
        />
        <StatusText value={userReportVal / 6} />
      </View>
      <Spacer height={8} />
      <Button
        onPress={() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Intro' }],
              });
        }}
        children={'Home'}
      />
      <Spacer height={10} />
      <View style={{ borderRadius: 8, padding: 8}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Preview</Text>
        <Spacer height={8} />
        <FlatList
          scrollEnabled={false}
          data={userOptions}
          renderItem={({item, index}) => (
            <View style={{paddingVertical: 8}}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                Q -{Questionnaire[index].question}
              </Text>
              <Preview
                ans={
                  Questionnaire[index].options.filter(e => e.points == item)[0].ans
                }
                status={item}
              />
              <Spacer height={8} />
              <Spacer height={1} color={AppColors.grey} />
            </View>
          )}
        />
      </View>
      <Spacer height={32} />
    </ScrollView>
  );
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
    flex:1/2.5
  };
const $settingsContainer: ViewStyle = {
  backgroundColor: 'white',
  alignSelf: 'flex-start',
  width: '100%',
  padding: 16,
};
