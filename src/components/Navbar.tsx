import React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../constants";
import AppTextDemiBold from "./ui/AppTextDemiBold";

const Navbar: React.FC = () => (
    <View style={styles.navbar}>
        <AppTextDemiBold style={styles.headline}>Todos</AppTextDemiBold>
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
