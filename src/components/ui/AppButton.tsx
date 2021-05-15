import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { COLORS } from "../../constants";
import AppTextDemiBold from "./AppTextDemiBold";

const AppButton: React.FC<{ onPress: () => void; color: string }> = ({
    children,
    onPress,
    color = COLORS.main,
}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppTextDemiBold style={styles.text}>
                    {children}
                </AppTextDemiBold>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 13,
    },
});

export default AppButton;
