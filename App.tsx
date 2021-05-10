import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import Navbar from "./src/components/Navbar";
import { BUTTONS, COLORS, ERRORS, TEXTS } from "./src/constants";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import { typeAddTodo, typeChangeTodo, typeTodo } from "./src/types";

const App: React.FC = () => {
    const [todos, setTodos] = useState<typeTodo[]>([]);
    const [todoId, setTodoId] = useState<string | null>(null);

    const deleteTodo = (id: string) => {
        const todo: typeTodo | undefined = todos.find(
            (t: typeTodo) => t.id === id
        );

        Alert.alert(
            TEXTS.deletingTasks,
            `${TEXTS.confirmDelete} ${todo?.text}?`,
            [
                {
                    text: BUTTONS.cancel,
                    style: "cancel",
                },
                {
                    text: BUTTONS.delete,
                    onPress: () => {
                        setTodoId(null);
                        setTodos((prev: typeTodo[]) =>
                            prev.filter((t: typeTodo) => t.id !== id)
                        );
                    },
                },
            ],
            {
                cancelable: false,
            }
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
            Alert.alert(ERRORS.emptyTask);
        }
    };

    const updateTodo: typeChangeTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((todo: typeTodo) => {
                const newTodo = { ...todo };
                if (todo.id === id) {
                    if (text != null) {
                        newTodo.text = text;
                    }
                }
                return newTodo;
            })
        );
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
                openMain={() => setTodoId(null)}
                todo={todos.filter((todo) => todo.id === todoId)[0]}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
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
        backgroundColor: COLORS.background,
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
