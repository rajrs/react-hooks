import {
    createSlice,
    createAsyncThunk
  } from '@reduxjs/toolkit';
  import _get from 'lodash/get'
  import { userService } from '../../service/user.service';

  export const AuthLogin = createAsyncThunk('user/AuthLogin',userService.login );

  export const userSlice = createSlice({
    name: 'users',
    initialState: {
      isLoggedin: false,
      userInfo:{},

    },
    reducers: {
    },extraReducers: {
        [AuthLogin.pending]: (state, action) => {
            console.log(action)
           console.log('pending')
          },
          [AuthLogin.fulfilled]: (state, action) => {
            state.isLoggedin = 'true';
           // state.userInfo = _get(action.payload, 'results', [])
          },
          [AuthLogin.rejected]: (state, action) => {
              console.log(action)
            state.isLoggedin = 'false';
           // state.userInfo = _get(action.payload, 'results', [])
          },
    }
  
  });
//   export const {
//     setSpinner
//   } = spinnerSlice.actions
  export const user = state => state.users;
  
  export default userSlice.reducer;