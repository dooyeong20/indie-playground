import { createSlice } from '@reduxjs/toolkit';
import { EViewMode, TAppState } from '../@types';

const initialState: TAppState = {
  viewMode: EViewMode.mobile,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeToMobileView: (state) => {
      state.viewMode = EViewMode.mobile;
    },
    changeToDesktopView: (state) => {
      state.viewMode = EViewMode.desktop;
    },
    changeToTabletView: (state) => {
      state.viewMode = EViewMode.tablet;
    },
  },
});

export const { changeToDesktopView, changeToTabletView, changeToMobileView } =
  appSlice.actions;
export default appSlice.reducer;
