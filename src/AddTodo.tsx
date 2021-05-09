import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View, Button,
} from 'react-native';

import { IAddTodo } from './types';

const AddTodo:React.FC<{addTodo: IAddTodo}> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTodo}
        style={styles.inputTodo}
        placeholder="Введите текст задачи"
        value={todo}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Добавить"
        color="#5c7da0"
        onPress={() => addTodo(todo, setTodo)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputTodo: {
    width: '70%',
    borderBottomColor: '#5c7da0',
    borderBottomWidth: 2,
    padding: 5,
  },
});

export default AddTodo;
