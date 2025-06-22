import axios, { AxiosError } from 'axios';

import Environment from '@/config/Environment';
import { NetworkStatus } from '@/constants/AppConstants';
import { debouncedNoInternetHandler } from '@/utils/NetworkManager';

const OPEN_API = axios.create({
  baseURL: Environment.apiUrl,
});

OPEN_API.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    if (error.code === 'ERR_NETWORK') {
      debouncedNoInternetHandler(NetworkStatus.OFFLINE);
    }

    return Promise.reject(error);
  },
);

export default OPEN_API;
