import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useDispatch } from 'react-redux'
import {setNavigation} from "../navigations/navigation";
import { increment, decrement } from '../store/counter/counter'
import {addTodo} from "../store/todo/action";

const App: FC = () => {
  const navigation = setNavigation();
  const dispatch = useDispatch();
  return (
      <View style={styles.container}>
          <Text> SignUp Screen</Text>
          <Button
              title="Go to Home Screen"
              onPress={() => navigation.openHomeScreen()}
          />
          <Button
              title="Increment Counter"
              onPress={() => dispatch(increment())}
          />
          <Button
              title="Decrement Counter"
              onPress={() => dispatch(decrement())}
          />
          <Button
              title="ADD TODO"
              onPress={() => dispatch(addTodo(navigation))}
          />
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
