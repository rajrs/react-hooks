import { configureStore } from '@reduxjs/toolkit'
import spinnerSlice from './slices/spinnerSlice'

export const store = configureStore({
  reducer: {
    spinner:spinnerSlice
  },
})