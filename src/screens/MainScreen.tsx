import React, { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Image,
    View,
    ScrollView,
    Dimensions,
} from "react-native";

import confusedImg from "../../assets/confused.jpg";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import AppText from "../components/ui/AppText";
import { STYLES, TEXTS } from "../constants";
import { IMainScreen } from "../types";

const MainScreen: React.FC<IMainScreen> = ({
    todos,
    deleteTodo,
    addTodo,
    openTodo,
}) => {
    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get("window").width
    );
    const [deviceHeight, setDeviceHeight] = useState(
        Dimensions.get("window").height
    );

    useEffect(() => {
        const update = () => {
            const { width } = Dimensions.get("window");
            setDeviceWidth(width);
        };
        Dimensions.addEventListener("change", update);

        return () => {
            Dimensions.removeEventListener("change", update);
        };
    });

    useEffect(() => {
        const update = () => {
            const { height } = Dimensions.get("window");
            setDeviceHeight(height);
        };
        Dimensions.addEventListener("change", update);

        return () => {
            Dimensions.removeEventListener("change", update);
        };
    });

    let content = (
        <View style={{ width: deviceWidth - STYLES.paddingHorizontal * 2 }}>
            <FlatList
                keyExtractor={({ id }) => id}
                data={todos}
                renderItem={({ item }) => (
                    <Todo
                        text={item.text}
                        id={item.id}
                        deleteTodo={deleteTodo}
                        openTodo={openTodo}
                    />
                )}
            />
        </View>
    );
    if (!todos.length) {
        content = (
            <ScrollView>
                <View style={{ ...styles.imgWrap, height: deviceHeight / 2 }}>
                    <Image
                        style={{ ...styles.img, height: deviceHeight / 3 }}
                        source={confusedImg}
                    />
                    <AppText style={styles.text}>{TEXTS.noTasks}</AppText>
                </View>
            </ScrollView>
        );
    }
    return (
        <>
            <AddTodo addTodo={addTodo} />
            {content}
        </>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: "100%",
        resizeMode: "contain",
    },
    text: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        textAlign: "center",
    },
});

export default MainScreen;
