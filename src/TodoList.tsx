import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Todo from "./Todo";
import { ITodoList } from "./types";

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo }) => (
    <FlatList
        style={styles.container}
        keyExtractor={({ id }) => id}
        data={todos}
        renderItem={({ item }) => (
            <Todo text={item.text} id={item.id} deleteTodo={deleteTodo} />
        )}
    />
);

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
    },
});

export default TodoList;
