import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import EditModal from "../components/EditModal";
import { BUTTONS, COLORS } from "../constants";
import { ITodoScreen } from "../types";

const TodoScreen: React.FC<ITodoScreen> = ({
    openMain,
    todo,
    deleteTodo,
    updateTodo,
}) => {
    const [modal, setModal] = useState(false);

    const onUpdateTodo = (text: string) => {
        updateTodo(todo.id, text);
        setModal(false);
    };

    return (
        <View>
            <EditModal
                value={todo.text}
                visible={modal}
                onCancel={() => setModal(false)}
                onUpdateTodo={onUpdateTodo}
            />
            <View style={styles.cardTodo}>
                <Text style={styles.cardText}>{todo.text}</Text>
                <Entypo
                    onPress={() => setModal(true)}
                    color={COLORS.main}
                    name="pencil"
                    size={24}
                />
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        color={COLORS.main}
                        onPress={openMain}
                        title={BUTTONS.home}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color={COLORS.dangerous}
                        onPress={() => deleteTodo(todo.id)}
                        title={BUTTONS.delete}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "40%",
    },
    cardTodo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: COLORS.backgroundCard,
        paddingVertical: 20,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderRadius: 3,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
    },
    cardText: {
        width: "80%",
    },
});

export default TodoScreen;
