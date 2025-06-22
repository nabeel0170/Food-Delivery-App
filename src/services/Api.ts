import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import axios, { CanceledError } from 'axios';

import Environment from '@/config/Environment';
import { NetworkStatus } from '@/constants/AppConstants';
import { debouncedNoInternetHandler } from '@/utils/NetworkManager';

const API = axios.create({
  baseURL: Environment.apiUrl,
});

// Request Interceptor
API.interceptors.request.use(async (config) => {
  const state = await NetInfo.fetch();
  const networkStatus = state.isConnected
    ? NetworkStatus.ONLINE
    : NetworkStatus.OFFLINE;
  debouncedNoInternetHandler(networkStatus);

  if (!state.isConnected) {
    throw new CanceledError('No internet connection detected.');
  }

  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json';

  return config;
});

// Response Interceptor
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(new Error('Request was cancelled.'));
    }

    if (error.code === 'ERR_NETWORK' || !error.response) {
      debouncedNoInternetHandler(NetworkStatus.OFFLINE);
      return Promise.reject(
        new Error(
          'Network error: Unable to reach the server. Please check your internet connection.',
        ),
      );
    }

    return Promise.reject(new Error('An unknown error occurred.'));
  },
);

export default API;
