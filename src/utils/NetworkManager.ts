import { Dispatch } from '@reduxjs/toolkit';
import { debounce } from 'lodash';

import { NetworkStatus } from '@/constants/AppConstants';
import { setNetworkStatus } from '@/store/slices/appSlice';

//implemented to avoid circular dependency issues

let dispatchFunction: Dispatch | null = null;

export const initializeNetworkManager = (dispatch: Dispatch) => {
  dispatchFunction = dispatch;
};

export const debouncedNoInternetHandler = debounce(
  (value: NetworkStatus) => {
    if (dispatchFunction) {
      dispatchFunction(setNetworkStatus(value));
    }
  },
  // eslint-disable-next-line no-magic-numbers
  3000,
  {
    leading: false,
    trailing: true,
    maxWait: 1000,
  },
);
