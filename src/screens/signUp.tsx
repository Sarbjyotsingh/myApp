import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Input} from '../components/index';

const App: FC = () => {
  const [name, useName] = useState<string>('');
  const [email, useEmail] = useState<string>('');
  const [password, usePassword] = useState<string>('');
  return (
    <View style={styles.container}>
      <Input
        placeholder="Name"
        onChangeText={(text) => {
          useName(text);
        }}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => {
          useEmail(text);
        }}
      />
      <Input
        placeholder="Password"
        onChangeText={(text) => {
          usePassword(text);
        }}
        secureTextEntry
      />
      <Button onSubmit={() => {}} title="Sign Up" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
