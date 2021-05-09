import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import AddTodo from "./src/AddTodo";
import Navbar from "./src/Navbar";
import TodoList from "./src/TodoList";
import EmptyTaskError from "./src/constants";
import { IAddTodo, typeTodo } from "./src/types";

const App: React.FC = () => {
    const [todos, setTodos] = useState<typeTodo[]>([]);

    const deleteTodo = (id: string) => {
        setTodos((prev: typeTodo[]) =>
            prev.filter((todo: typeTodo) => todo.id !== id)
        );
    };

    const addTodo: IAddTodo = (todo, setTodo) => {
        if (todo.trim()) {
            setTodos((prev: typeTodo[]) => [
                {
                    id: Date.now().toString(),
                    text: todo,
                },
                ...prev,
            ]);
            setTodo("");
        } else {
            Alert.alert(EmptyTaskError);
        }
    };

    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                <AddTodo addTodo={addTodo} />
                <TodoList deleteTodo={deleteTodo} todos={todos} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e7e7",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    content: {
        width: "90%",
    },
});

export default App;
