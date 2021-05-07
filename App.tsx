import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import TodoList from "./src/TodoList";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} />
      </View>
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  content: {
    width: '90%',
  }
});
