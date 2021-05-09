import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { IMainScreen } from "../types";

const MainScreen: React.FC<IMainScreen> = ({
    todos,
    deleteTodo,
    addTodo,
    openTodo,
}) => {
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <FlatList
                style={styles.container}
                keyExtractor={({ id }) => id}
                data={todos}
                renderItem={({ item }) => (
                    <Todo
                        text={item.text}
                        id={item.id}
                        deleteTodo={deleteTodo}
                        openTodo={openTodo}
                    />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});

export default MainScreen;
