import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

import { BUTTONS, COLORS, TEXTS } from "../constants";
import { IAddTodo } from "../types";

const AddTodo: React.FC<IAddTodo> = ({ addTodo }) => {
    const [todo, setTodo] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setTodo}
                style={styles.inputTodo}
                placeholder={TEXTS.placeholder}
                value={todo}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button
                title={BUTTONS.add}
                color={COLORS.main}
                onPress={() => addTodo(todo, setTodo)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    inputTodo: {
        width: "70%",
        borderBottomColor: COLORS.main,
        borderBottomWidth: 2,
        padding: 5,
    },
});

export default AddTodo;
