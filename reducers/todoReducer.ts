import { createAction, createSlice } from '@reduxjs/toolkit'

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export const addTaskAC = createAction<{ title: string }>('todo/addTask')
export const changeStatusAC = createAction<{ id: number; isDone: boolean }>('todo/changeStatusAC')
export const removeTaskAC = createAction<{ id: number }>('todo/removeTaskAC')

const initialState: TaskType[] = [
  {
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
  extraReducers: (builder) => {
    builder
      .addCase(addTaskAC, (state, action) => {
        const newTask: TaskType = {
          id: state.length + 1,
          title: action.payload.title,
          isDone: false,
        }
        state.push(newTask)
      })
      .addCase(changeStatusAC, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id)
        state[index].isDone = action.payload.isDone
      })
      .addCase(removeTaskAC, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id)
        state.splice(index,1)
      })
  },
})

export const reducer = slice.reducer
