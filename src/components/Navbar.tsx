import React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../constants";
import AppDemiBoldText from "./ui/AppDemiBoldText";

const Navbar: React.FC = () => (
    <View style={styles.navbar}>
        <AppDemiBoldText style={styles.headline}>Todos</AppDemiBoldText>
    </View>
);

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        backgroundColor: COLORS.main,
        alignItems: "center",
        justifyContent: "center",
        height: 80,
    },
    headline: {
        color: COLORS.backgroundCard,
        fontSize: 20,
    },
});

export default Navbar;
