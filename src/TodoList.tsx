import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoList = ({ todos } : { todos: string[]}) => {
    return (
        <View>
            {todos.map((todo, index) => {
                return (
                    <Text key={index}>{todo}</Text>
                )
            }
            )}
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TodoList;