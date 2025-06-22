import { COLOR_THEME, NetworkStatus } from '@/constants/AppConstants';

export interface IAppReduxState {
  isLoading: boolean;
  networkStatus: NetworkStatus;
  selectedTheme: COLOR_THEME;
}
