import React from "react";
import { FlatList, StyleSheet, Image, View, Text } from "react-native";

import confusedImg from "../../assets/confused.jpg";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { TEXTS } from "../constants";
import { IMainScreen } from "../types";

const MainScreen: React.FC<IMainScreen> = ({
    todos,
    deleteTodo,
    addTodo,
    openTodo,
}) => {
    let content = (
        <FlatList
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
    );
    if (!todos.length) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.img} source={confusedImg} />
                <Text style={styles.text}>{TEXTS.noTasks}</Text>
            </View>
        );
    }
    return (
        <>
            <AddTodo addTodo={addTodo} />
            {content}
        </>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300,
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    text: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        textAlign: "center",
    },
});

export default MainScreen;
