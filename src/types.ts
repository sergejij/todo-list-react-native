export type typeTodo = {
    id: string;
    text: string;
};

export type onTodoPressType = {
    (id: string): void;
};

export type typeAddTodo = {
    (todo: string, setTodo: (t: string) => void): void;
};

export type typeChangeTodo = {
    (id: string, text: string): void;
};

export interface ITodo extends typeTodo {
    deleteTodo: (id: string) => void;
    openTodo: onTodoPressType;
}

export interface IAddTodo {
    addTodo: typeAddTodo;
}

export interface ITodoList {
    todos: typeTodo[];
    deleteTodo: (id: string) => void;
}

export interface IEditModal {
    visible: boolean;
    onCancel: () => void;
    value: string;
    onUpdateTodo: (s: string) => void;
}

export interface ITodoScreen {
    openMain: () => void;
    todo: typeTodo;
    deleteTodo: (id: string) => void;
    updateTodo: typeChangeTodo;
}

export interface IMainScreen extends ITodoList, IAddTodo {
    openTodo: onTodoPressType;
}
