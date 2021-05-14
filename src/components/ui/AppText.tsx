import React from "react";
import { StyleSheet, Text } from "react-native";

const AppText: React.FC<{
    children: React.ReactNode;
    style: object;
}> = ({ children, style }) => {
    return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
    default: {
        fontFamily: "golos-regular",
    },
});

export default AppText;
