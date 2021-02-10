import React, {FC} from 'react';
import {SignUp, Login} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="signUp" component={SignUp} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;
