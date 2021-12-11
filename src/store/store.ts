import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import userReducer from './userSlice';
import contentReducer from './contentSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    content: contentReducer,
  },
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
