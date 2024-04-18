import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
  },
  reducers: {
    appSetUser: (state, action) => {
      if (!action.payload) {
        state.user = null;
        state.fcmToken = null;
        state.notifications = [];
      } else {
        state.user = {...state.user, ...action.payload};
      }
    },
  },
});

export const {appSetUser} = appSlice.actions;

export default appSlice.reducer;
