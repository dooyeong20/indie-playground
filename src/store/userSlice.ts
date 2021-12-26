import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EUserStatus, TUserState } from '../@types';

const initialState: TUserState = {
  status: EUserStatus.guest,
  displayName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<TUserState>) => {
      state.status = action.payload.status;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
    },
    logout: (state) => {
      const { status, displayName, email } = initialState;
      state.status = status;
      state.displayName = displayName;
      state.email = email;
    },
  },
});

export const { loginUser, logout } = userSlice.actions;
export default userSlice.reducer;
