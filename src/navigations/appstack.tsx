import React, {FC} from 'react';
import {Home, Dashboard} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

const AppStack: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  );
};

export default AppStack;
