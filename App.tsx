import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import Navbar from "./src/components/Navbar";
import EmptyTaskError from "./src/constants";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import { typeAddTodo, typeTodo } from "./src/types";

const App: React.FC = () => {
    const [todos, setTodos] = useState<typeTodo[]>([]);
    const [todoId, setTodoId] = useState<string | null>(null);

    const deleteTodo = (id: string) => {
        setTodos((prev: typeTodo[]) =>
            prev.filter((todo: typeTodo) => todo.id !== id)
        );
    };

    const addTodo: typeAddTodo = (todo, setTodo) => {
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

    let content = (
        <MainScreen
            todos={todos}
            deleteTodo={deleteTodo}
            addTodo={addTodo}
            openTodo={(id: string) => {
                setTodoId(id);
            }}
        />
    );
    if (todoId) {
        content = (
            <TodoScreen
                openMain={() => {
                    setTodoId(null);
                }}
                todo={todos.filter((todo) => todo.id === todoId)[0]}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>{content}</View>
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
        marginTop: 20,
    },
});

export default App;
