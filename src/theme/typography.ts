import {Platform} from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  Light: Platform.select({
    ios: 'SplineSans-Light', // The font family name
    android: 'SplineSans-Light', // The file name
  }),
  Bold: Platform.select({
    ios: 'SplineSans-Bold', // The font family name
    android: 'SplineSans-Bold', // The file name
  }),
  Regular: Platform.select({
    ios: 'SplineSans-Regular', // The font family name
    android: 'SplineSans-Regular', // The file name
  }),
  Medium: Platform.select({
    ios: 'SplineSans-Medium', // The font family name
    android: 'SplineSans-Medium', // The file name
  }),
  SemiBold: Platform.select({
    ios: 'SplineSans-SemiBold', // The font family name
    android: 'SplineSans-SemiBold', // The file name
  }),
};
