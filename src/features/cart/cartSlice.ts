import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/produto'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
