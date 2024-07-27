import {Dimensions} from 'react-native';

export const AppConstants = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const Questionnaire = [
  {
    question: 'How would you describe your investment knowledge?',
    options: [
      {ans: 'Novice', points: 1},
      {ans: 'Intemediate', points: 2},
      {ans: 'Advance', points: 3},
    ],
    key: 'qt1',
  },
  {
    question: 'What would be the duration of Investment?',
    options: [
      {ans: 'Short-term (less than 1 year)', points: 1},
      {ans: 'Medium-term (1 - 5 years)', points: 2},
      {ans: 'Long-term (more than 5 years)', points: 3},
    ],
    key: 'qt2',
  },
  {
    question: 'How comfortable are you in taking risk?',
    options: [
      {ans: 'Very risk-averse', points: 1},
      {ans: 'Somewhat risk-averse', points: 2},
      {ans: 'Neutral Somewhat risk-tolerant', points: 3},
      {ans: 'Very risk-tolerant', points: 4},
    ],
    key: 'qt3',
  },
  {
    question: 'What percentage of your income are you willing to invest?',
    options: [
      {ans: 'Less than 10%', points: 4},
      {ans: '10-25%', points: 3},
      {ans: '25-50%', points: 2},
      {ans: 'More than 50%', points: 1},
    ],
    key: 'qt4',
  },
  {
    question:
      'How would you react to a sudden drop in the value of your investment?',
    options: [
      {ans: 'Panic and sell immediatately', points: 1},
      {ans: 'Sell it as a buying opportunity and invest more', points: 2},
      {ans: 'Hold and wait for recovery', points: 3},
      {ans: 'Monitor closely and consider selling', points: 4},
    ],
    key: 'qt5',
  },
  {
    question:
      'What measures do you take to protect your investments from unexpected events(eg. market crahses, economic downturns)?',
    options: [
      {ans: 'Maintain a cash reserve', points: 4},
      {ans: 'Diversify ', points: 3},
      {ans: 'No Action ', points: 2},
      {ans: 'Use stop loss Orders ', points: 1},
    ],
    key: 'qt6',
  },
];
