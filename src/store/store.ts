import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
