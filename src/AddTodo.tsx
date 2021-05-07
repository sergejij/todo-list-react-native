import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const AddTodo = ({ setTodos  } : {setTodos: any}) => {
    const [todo, setTodo] = useState('');

    const onAddTodo = () => {
        if (!todo.trim()) {
            return
        }

        setTodos((prev: string[]) => [...prev, todo]);
        setTodo('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setTodo}
                style={styles.inputTodo}
                placeholder="Введите текст задачи"
                value={todo}
            />
            <Button title="Добавить" color="#5c7da0" onPress={onAddTodo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    inputTodo: {
        width: '70%',
        borderBottomColor: "#5c7da0",
        borderBottomWidth: 2,
        padding: 5,
    }
});

export default AddTodo;