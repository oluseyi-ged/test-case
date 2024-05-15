/* eslint-disable @typescript-eslint/no-unused-vars */
import {Block, Button, SizedBox, SvgIcon, Text, TextInput} from '@components';
import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {useAppDispatch} from 'store';
import styles from './styles';

export const Bio: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const width = Dimensions.get('window').width;

  return (
    <Block safe style={styles.pageWrap}>
      <Block style={styles.btmBox}>
        <SizedBox height={80} />
        <Text h4 medium>
          Create Your Profile
        </Text>
        <SizedBox height={8} />
        <Text p>First, let’s create your profile.</Text>
        <SizedBox height={60} />
        <View style={styles.aviNull}>
          <SvgIcon name="avi" size={34} />
          <SvgIcon
            name="upload"
            size={27}
            containerStyle={{position: 'absolute', right: 0, bottom: 0}}
          />
        </View>
        <SizedBox height={32} />

        <TextInput onChangeText={txt => console.log(txt)} placeholder="Name" />
        <SizedBox height={16} />
        <TextInput
          onChangeText={txt => console.log(txt)}
          placeholder="Bio"
          charLength={30}
          maxLength={30}
          numberOfLines={4}
          inputStyle={{height: 70}}
          innerStyle={{height: 37}}
        />
        <SizedBox height={24} />

        <Button
          radius={128}
          onPress={() => navigation.navigate('AddAccounts')}
          justifyContent="center"
          alignItems="center"
          color="#151515"
          style={styles.btn}
          title="Next"
        />
      </Block>
    </Block>
  );
};
