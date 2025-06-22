import { useEffect } from 'react';

const useThemeFonts = () => {
  // const [fontsLoaded] = useFonts(FONT_PATHS);

  useEffect(() => {
    const prepareFonts = async () => {
      // if (fontsLoaded) {
      //   // await SplashScreen.hideAsync();
      // }
    };

    prepareFonts();
  }, []);

  return true;
};

export default useThemeFonts;
