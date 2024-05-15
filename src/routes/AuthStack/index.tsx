import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens';
import React from 'react';

const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName="Describe">
      <AuthStack.Screen
        name="Login"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
