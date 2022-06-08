import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducers/todoReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
