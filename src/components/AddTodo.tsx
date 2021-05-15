import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { BUTTONS, COLORS, TEXTS } from "../constants";
import { IAddTodo } from "../types";
import AppButton from "./ui/AppButton";

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
            <AppButton
                color={COLORS.main}
                onPress={() => addTodo(todo, setTodo)}
            >
                {BUTTONS.add}
            </AppButton>
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
        width: "60%",
        borderBottomColor: COLORS.main,
        borderBottomWidth: 2,
        padding: 5,
    },
});

export default AddTodo;
