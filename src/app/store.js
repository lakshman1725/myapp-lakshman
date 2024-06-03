import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from "../features/todolist/todolistSlice"
import { countriesApi } from '../services/CountriesApi'
import { productsApi } from '../services/ProductsApi'
import { postsApi } from '../services/postsApi'
export const store = configureStore({
  reducer: {
    counter: counterReducer,todooo:todolistReducer,
    [countriesApi.reducerPath]:countriesApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware)
})