export type typeTodo = {
    id: string,
    text: string
}

export interface ITodo extends typeTodo {
    deleteTodo: (id: string) => void
}

export interface IAddTodo {
    (todo: string, setTodo: (todo: string) => void): void;
}

export interface ITodoList {
    todos: typeTodo[],
    deleteTodo: (id: string) => void
}
