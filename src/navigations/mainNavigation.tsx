import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Home, Login, SignUp} from '../screens';
import {verticalAnimation} from '../utils/utils';

export type RootStackParamList = {
  home: undefined;
  Profile: {userId: string};
  login: undefined;
  signUp: undefined;
  dashboard: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const MainNav: FC = () => {
  const [user, setUser] = useState<any>(() => {
    return null;
  });

  const getUserAuthInfo = () => {
    firebase.auth().onAuthStateChanged((_user) => {
      if (_user) {
        setUser(() => {
          return _user;
        });
      }
    });
  };

  useEffect(() => {
    getUserAuthInfo();
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        initialRouteName={user !== null ? 'home' : 'signUp'}>
        <RootStack.Screen
          name="signUp"
          component={SignUp}
          options={verticalAnimation}
        />
        <RootStack.Screen
          name="login"
          component={Login}
          options={verticalAnimation}
        />
        <RootStack.Screen
          name="home"
          component={Home}
          options={verticalAnimation}
        />
        <RootStack.Screen
          name="dashboard"
          component={Dashboard}
          options={verticalAnimation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
