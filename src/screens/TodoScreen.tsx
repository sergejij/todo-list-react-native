import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import EditModal from "../components/EditModal";
import AppButton from "../components/ui/AppButton";
import AppText from "../components/ui/AppText";
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
                <AppText style={styles.cardText}>{todo.text}</AppText>
                <Entypo
                    onPress={() => setModal(true)}
                    color={COLORS.main}
                    name="pencil"
                    size={24}
                />
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={COLORS.secondary} onPress={openMain}>
                        {BUTTONS.home}
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={COLORS.dangerous}
                        onPress={() => deleteTodo(todo.id)}
                    >
                        {BUTTONS.delete}
                    </AppButton>
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
        width: Dimensions.get("window").width > 400 ? 160 : 120,
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
