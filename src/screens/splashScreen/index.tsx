/* eslint-disable @typescript-eslint/no-unused-vars */
import {Text} from '@components';
import {useFocusEffect} from '@react-navigation/native';
import React, {FC} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useAppDispatch} from 'store';
import style from './styles';

export const SplashScreen: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.navigate('Onboarding');
      }, 2300);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <View style={style.container}>
      <Animatable.View animation="flash" direction="normal" duration={2000}>
        <Animatable.View animation="fadeIn" duration={2300}>
          <Text>Okay</Text>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};
