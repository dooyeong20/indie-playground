import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EUserStatus, TUserState } from '../@types';

const initialState: TUserState = {
  status: EUserStatus.guest,
  userName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<TUserState>) => {
      state.status = action.payload.status;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.status = EUserStatus.guest;
      state.userName = '';
    },
  },
});

export const { loginUser, logout } = userSlice.actions;
export default userSlice.reducer;
