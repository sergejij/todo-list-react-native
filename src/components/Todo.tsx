import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import { ITodo } from "../types";

const Todo: React.FC<ITodo> = ({ text, id, deleteTodo, openTodo }) => (
    <TouchableOpacity
        onPress={() => openTodo(id)}
        onLongPress={() => deleteTodo(id)}
        activeOpacity={0.7}
        style={styles.todo}
    >
        <Text style={styles.todoText}>{text}</Text>
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
        flexDirection: "row",
        justifyContent: "space-between",
        borderLeftColor: COLORS.main,
        borderLeftWidth: 8,
        borderRadius: 3,
        padding: 14,
        backgroundColor: COLORS.backgroundCard,
        marginBottom: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
    },
    todoText: {
        width: "80%",
    },
});

export default Todo;
