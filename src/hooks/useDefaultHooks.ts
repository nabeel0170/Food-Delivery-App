import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import useThemeFonts from '@/hooks/useThemeFonts';

export const useDefaultHooks = () => {
  const networkStatus = useNetworkStatus();
  const fontsLoaded = useThemeFonts();

  if (!fontsLoaded) {
    return null;
  }
  return {
    networkStatus,
    fontsLoaded,
  };
};
