import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
    Alert,
} from "react-native";

import { BUTTONS, COLORS, ERRORS, TEXTS } from "../constants";
import { IEditModal } from "../types";

const EditModal: React.FC<IEditModal> = ({
    visible,
    onCancel,
    value,
    onUpdateTodo,
}) => {
    const [text, setText] = useState(value);

    const saveHandler = () => {
        if (text.trim().length === 0) {
            Alert.alert(ERRORS.emptyTask);
        } else {
            onUpdateTodo(text);
        }
    };

    return (
        <Modal animationType="slide" visible={visible} transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    onChangeText={setText}
                    value={text}
                    style={styles.input}
                    placeholder={TEXTS.placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            color={COLORS.dangerous}
                            onPress={onCancel}
                            title={BUTTONS.cancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color={COLORS.main}
                            onPress={saveHandler}
                            title={BUTTONS.save}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        padding: 10,
        borderBottomColor: COLORS.main,
        borderBottomWidth: 2,
        marginBottom: 10,
        width: "80%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    button: {
        width: "40%",
    },
});

export default EditModal;
