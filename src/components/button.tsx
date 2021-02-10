import React, {FC} from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');

interface Props {
  title: string;
  onSubmit: () => void;
}

const Button: FC<Props> = ({title, onSubmit}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onSubmit}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#4267B2',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
