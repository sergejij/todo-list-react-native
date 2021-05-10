import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants";

const Navbar: React.FC = () => (
    <View style={styles.navbar}>
        <Text style={styles.headline}>Todos</Text>
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
        fontFamily: "Roboto",
        fontSize: 20,
    },
});

export default Navbar;
