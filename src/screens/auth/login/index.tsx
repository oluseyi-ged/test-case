/* eslint-disable @typescript-eslint/no-unused-vars */
import {Block, Button, SizedBox, SvgIcon, Text, TextInput} from '@components';
import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import {useAppDispatch} from 'store';
import styles from './styles';

export const Login: FC = ({navigation}: any) => {
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
          <SizedBox height={138} />

          <Text h4 medium>
            Echo Secured!
          </Text>
          <SizedBox height={8} />
          <Text p>
            Now, let’s create your Spatial iD to begin editing your Circle.
          </Text>
          <SizedBox height={32} />
          <TextInput
            onChangeText={txt => console.log(txt)}
            placeholder="Email or Phone Number"
          />
          <SizedBox height={16} />
          <TextInput
            onChangeText={txt => console.log(txt)}
            placeholder="Password"
          />
          <SizedBox height={24} />

          <Button
            radius={128}
            onPress={() => navigation.navigate('Bio')}
            justifyContent="center"
            alignItems="center"
            color="#151515"
            // style={styles.btn}
            title="Create Account"
          />
        </Block>
      </Block>
    </Block>
  );
};
