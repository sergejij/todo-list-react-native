import React from "react";
import { StyleSheet, Text } from "react-native";

const AppDemiBoldText: React.FC<{
    children: React.ReactNode;
    style: object;
}> = ({ children, style }) => {
    return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
    default: {
        fontFamily: "golos-demiBold",
    },
});

export default AppDemiBoldText;
