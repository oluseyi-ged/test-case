/* eslint-disable @typescript-eslint/no-unused-vars */
import {LogoGif} from '@assets/images';
import {Block, Button, SizedBox, SvgIcon, Text, TextInput} from '@components';
import React, {FC} from 'react';
import {Dimensions, Image} from 'react-native';
import {useAppDispatch} from 'store';
import styles from './styles';

export const Echo: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const width = Dimensions.get('window').width;

  return (
    <Block safe style={styles.pageWrap}>
      <Block justifyContent="space-between">
        <Block style={styles.btmBox}>
          <SvgIcon
            name="back"
            size={40}
            containerStyle={{alignSelf: 'flex-start'}}
          />
          <Image source={LogoGif} style={[styles.gif]} />
          <Text h4 medium>
            Create your echo
          </Text>
          <SizedBox height={8} />
          <Text p>
            Your echo is your unique identifier for sharing your Circle
            experiences.
          </Text>
          <SizedBox height={24} />
          <TextInput
            onChangeText={txt => console.log(txt)}
            placeholder="your-echo"
            charLength={20}
          />
        </Block>
        <Block>
          <Button
            radius={128}
            onPress={() => navigation.navigate('Login')}
            justifyContent="center"
            alignItems="center"
            color="#151515"
            style={styles.btn}
            title="Claim"
          />
        </Block>
      </Block>
    </Block>
  );
};
