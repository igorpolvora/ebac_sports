import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './api/productsApi'
import cartReducer from '../features/cart/cartSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
