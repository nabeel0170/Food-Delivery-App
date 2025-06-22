import NetInfo from '@react-native-community/netinfo';
import { useEffect } from 'react';

import { NetworkStatus } from '@/constants/AppConstants';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectApp } from '@/store/selectors/appSelector';
import { setNetworkStatus } from '@/store/slices/appSlice';

export const useNetworkStatus = () => {
  const dispatch = useAppDispatch();
  const { networkStatus } = useAppSelector(selectApp);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const status = state.isConnected
        ? NetworkStatus.ONLINE
        : NetworkStatus.OFFLINE;

      dispatch(setNetworkStatus(status));
    });

    // Initial check
    NetInfo.fetch().then((state) => {
      const status = state.isConnected
        ? NetworkStatus.ONLINE
        : NetworkStatus.OFFLINE;
      dispatch(setNetworkStatus(status));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return networkStatus;
};
