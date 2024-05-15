/* eslint-disable @typescript-eslint/no-unused-vars */
import {Block, Button, SizedBox, SvgIcon, Text, TextInput} from '@components';
import React, {FC, useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from 'store';
import styles from './styles';

export const AddAccounts: FC = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const width = Dimensions.get('window').width;
  const [categories, setCategories] = useState([
    {
      category: 'Social',
      isOpen: true,
      apps: [
        {name: 'Instagram', username: ''},
        {name: 'Facebook', username: ''},
        // Add more social apps here if needed
      ],
    },
    {
      category: 'Video',
      isOpen: true,
      apps: [
        {name: 'YouTube', username: ''},
        {name: 'TikTok', username: ''},
        // Add more video apps here if needed
      ],
    },
    {
      category: 'Messaging',
      isOpen: true,
      apps: [
        {name: 'WhatsApp', username: ''},
        {name: 'Messenger', username: ''},
        // Add more messaging apps here if needed
      ],
    },
    {
      category: 'Design',
      isOpen: true,
      apps: [
        {name: 'Adobe Photoshop', username: ''},
        {name: 'Figma', username: ''},
        // Add more design apps here if needed
      ],
    },
    {
      category: 'Coding',
      isOpen: true,
      apps: [
        {name: 'Visual Studio Code', username: ''},
        {name: 'GitHub', username: ''},
        // Add more coding apps here if needed
      ],
    },
  ]);

  const toggleAccordion = index => {
    const updatedCategories = [...categories];
    updatedCategories[index].isOpen = !updatedCategories[index].isOpen;
    setCategories(updatedCategories);
  };

  const handleUsernameChange = (categoryIndex, appIndex, value) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].apps[appIndex].username = value;
    setCategories(updatedCategories);
  };

  return (
    <Block safe style={styles.pageWrap}>
      <Block justifyContent="space-between">
        <Block style={styles.btmBox}>
          <SvgIcon
            name="back"
            size={40}
            containerStyle={{alignSelf: 'flex-start'}}
          />
          <SizedBox height={15} />

          <Text h4 medium>
            Welcome, Daniel!
          </Text>
          <SizedBox height={8} />
          <Text p>Now, let’s add your account handles to your Circle.</Text>
          <SizedBox height={32} />
          {categories.map((category, categoryIndex) => (
            <View key={category.category}>
              <TouchableOpacity
                style={styles.showTrigger}
                onPress={() => toggleAccordion(categoryIndex)}>
                <Text>{category.category}</Text>
                <SvgIcon
                  name={category.isOpen ? 'caret-up' : 'caret-down'}
                  size={32}
                />
              </TouchableOpacity>
              {/* Dropdown for each category */}
              {category.isOpen &&
                // Dropdown for each category
                category.apps.map((app, appIndex) => (
                  <View key={app.name}>
                    <Text>{app.name}</Text>
                    <TextInput
                      value={app.username}
                      onChangeText={value =>
                        handleUsernameChange(categoryIndex, appIndex, value)
                      }
                      placeholder="Enter username"
                    />
                  </View>
                ))}
            </View>
          ))}
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
