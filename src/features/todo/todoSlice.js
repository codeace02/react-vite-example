import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action?.payload //action?.payload?.text since yha pe property k nam same h "text"
            }

            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state?.todos?.filter((todo) => todo?.id !== action?.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }

            // or
            //  state.todos = state.todos.map(todo =>
            // todo.id === id ? { ...todo, text } : todo
            // );
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice?.actions

export default todoSlice?.reducer