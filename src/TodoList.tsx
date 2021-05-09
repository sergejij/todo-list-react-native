import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import {ITodoList, typeTodo} from "./types";
import Todo from "./Todo";

const TodoList:React.FC<ITodoList> = ({ todos, deleteTodo }) => {
    return (
        <FlatList
            style={styles.container}
            keyExtractor={({ id }) => id}
            data={todos}
            renderItem={({item} : {item: typeTodo}) =>
               <Todo text={item.text} id={item.id} deleteTodo={deleteTodo}/>
            }
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    todo: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderLeftColor: "#5c7da0",
        borderLeftWidth: 8,
        borderRadius: 3,
        padding: 14,
        backgroundColor: "#fafafa",
        marginBottom: 10,
    }
});

export default TodoList;