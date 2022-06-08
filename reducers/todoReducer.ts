import {createAction, createSlice} from '@reduxjs/toolkit'

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const addTaskAC = createAction<{ title: string }>('todo/addTask')
export const changeStatusAC = createAction<{ id: number }>('todo/changeStatusAC')

const initialState: TaskType[] = [{
    id: 1,
    title: 'HTML',
    isDone: true,
},
    {
        id: 2,
        title: 'CSS',
        isDone: false,
    },
    {
        id: 3,
        title: 'React Native',
        isDone: true,
    },


]

const slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(addTaskAC, ((state, action) => {
            const newTask: TaskType = {id: state.length + 1, title: action.payload.title, isDone: false}
            state.push(newTask)
        }))
    })
})

export const reducer = slice.reducer
