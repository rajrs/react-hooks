import {
    createSlice
  } from '@reduxjs/toolkit';
  
  
  export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState: {
      showSpinner: false,
    },
    reducers: {
      setSpinner: (state, action) => {
        state.showSpinner = action.payload
      }
    },
  
  });
  export const {
    setSpinner
  } = spinnerSlice.actions
  export const showSpinner = state => state.spinner.showSpinner;
  
  export default spinnerSlice.reducer;