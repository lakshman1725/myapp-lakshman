import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from "../features/todolist/todolistSlice"
import { countriesApi } from '../services/CountriesApi'
export const store = configureStore({
  reducer: {
    counter: counterReducer,todooo:todolistReducer,
    [countriesApi.reducerPath]:countriesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})