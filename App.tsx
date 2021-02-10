/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import './src/constants/firebase';
import MainNav from './src/navigations/mainNavigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return <MainNav />;
};

export default App;
