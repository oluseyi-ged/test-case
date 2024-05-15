/* eslint-disable @typescript-eslint/no-unused-vars */
import Block from '@components/block';
import React, {FC} from 'react';
import {Dimensions, StatusBar, Text} from 'react-native';
import {useAppDispatch} from 'store';
import styles from './styles';

export const Onboarding: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const width = Dimensions.get('window').width;

  return (
    <Block style={styles.pageWrap}>
      <StatusBar barStyle="light-content" />
      <Text>Okay</Text>
    </Block>
  );
};
