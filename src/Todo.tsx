import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ITodo } from './types';

const Todo:React.FC<ITodo> = ({ text, id, deleteTodo }) => (
  <TouchableOpacity
    onLongPress={() => deleteTodo(id)}
    activeOpacity={0.7}
    style={styles.todo}
  >
    <Text>{text}</Text>
    <Feather
      onPress={() => deleteTodo(id)}
      name="check"
      size={24}
      color="green"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftColor: '#5c7da0',
    borderLeftWidth: 8,
    borderRadius: 3,
    padding: 14,
    backgroundColor: '#fafafa',
    marginBottom: 10,
  },
});

export default Todo;
