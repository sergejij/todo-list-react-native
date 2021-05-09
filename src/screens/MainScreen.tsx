import React from "react";
// import { StyleSheet } from "react-native";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { IMainScreen } from "../types";

const MainScreen: React.FC<IMainScreen> = ({ todos, deleteTodo, addTodo }) => {
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <TodoList deleteTodo={deleteTodo} todos={todos} />
        </>
    );
};

// const styles = StyleSheet.create({});

export default MainScreen;
