import { API_URL, APP_ENV } from '@env';

interface IEnvironment {
  appEnv: string;
  apiUrl: string;
  debug: boolean;
}

const Environment: IEnvironment = {
  debug: __DEV__,
  appEnv: APP_ENV,
  apiUrl: API_URL,
};

export default Environment;
