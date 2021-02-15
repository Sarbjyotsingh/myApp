import React, {FC} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {setNavigation} from "../navigations/navigation";

const App: FC = () => {
  const navigation = setNavigation();
  return (
    <View style={styles.container}>
      <Text> SignUp Screen</Text>
      <Button
          title="Go to Home Screen"
          onPress={() => navigation.openHomeScreen()}
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
