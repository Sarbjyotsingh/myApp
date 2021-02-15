import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';
import {createStackNavigator} from "@react-navigation/stack";
import {Dashboard, Home, Login, SignUp} from "../screens";

type RootStackParamList = {
  home: undefined;
  Profile: { userId: string };
  login: undefined;
  signUp: undefined;
  dashboard: undefined
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
          initialRouteName={user !== null ? "home" : "signUp"}
      >
        <RootStack.Screen name="signUp" component={SignUp} />
        <RootStack.Screen name="login" component={Login} />
        <RootStack.Screen name="home" component={Home} />
        <RootStack.Screen name="dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
