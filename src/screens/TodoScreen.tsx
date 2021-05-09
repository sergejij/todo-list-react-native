import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { typeTodo } from "../types";

const TodoScreen: React.FC<{ openMain: () => void; todo: typeTodo }> = ({
    openMain,
    todo,
}) => {
    return (
        <View>
            <View style={styles.cardTodo}>
                <Text style={styles.cardText}>{todo.text}</Text>
                <Entypo color="#5c7da0" name="pencil" size={24} />
            </View>
            <View style={styles.buttons}>
                <Button color="#5c7da0" onPress={openMain} title="На главную" />
                <Button color="#CD5C5C" onPress={openMain} title="Удалить" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cardTodo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingVertical: 30,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 3,
    },
    cardText: {
        width: "80%",
    },
    buttonHome: {},
});

export default TodoScreen;
