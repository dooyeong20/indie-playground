import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EPage, EViewMode, TAppState } from '../@types';

const initialState: TAppState = {
  viewMode: EViewMode.mobile,
  currentPage: EPage.home,
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
    changePageTo: (state, action: PayloadAction<EPage>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  changeToDesktopView,
  changeToTabletView,
  changeToMobileView,
  changePageTo,
} = appSlice.actions;
export default appSlice.reducer;
