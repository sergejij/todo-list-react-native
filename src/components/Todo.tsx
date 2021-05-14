import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import { ITodo } from "../types";
import AppText from "./ui/AppText";

const Todo: React.FC<ITodo> = ({ text, id, deleteTodo, openTodo }) => (
    <TouchableOpacity
        onPress={() => openTodo(id)}
        onLongPress={() => deleteTodo(id)}
        activeOpacity={0.7}
        style={styles.todo}
    >
        <AppText style={styles.todoText}>{text}</AppText>
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
        alignItems: "center",
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
