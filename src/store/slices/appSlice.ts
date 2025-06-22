import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { COLOR_THEME, NetworkStatus } from '@/constants';
import { IAppReduxState } from '@/store/types/App.types';

const initialState: IAppReduxState = {
  isLoading: false,
  networkStatus: NetworkStatus.ONLINE,
  selectedTheme: COLOR_THEME.Light,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetApp: () => initialState,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setNetworkStatus: (state, action: PayloadAction<NetworkStatus>) => {
      state.networkStatus = action.payload;
    },

    setColorTheme: (state, action: PayloadAction<COLOR_THEME>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setLoading, setNetworkStatus, resetApp, setColorTheme } =
  appSlice.actions;

export default appSlice;
