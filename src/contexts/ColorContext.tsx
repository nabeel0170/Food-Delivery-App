// this is intensional
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

import { COLOR_THEME } from '@/constants';
import { useAppSelector } from '@/hooks/useAppSelector';
import { DarkColors, LightColors } from '@/theme';
import { IColor } from '@/types/Colors.types';

interface IColorContext {
  colors: IColor;
}
const value: IColorContext = {
  colors: LightColors,
};

const ColorContext = React.createContext(value);

type ColorProviderProps = {
  children: React.ReactNode;
};

export const ColorProvider = ({ children }: ColorProviderProps) => {
  const { selectedTheme } = useAppSelector((state) => state.app);
  const [systemTheme, setSystemTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const colorContextValue = useMemo(() => {
    let themeColors = LightColors;
    if (selectedTheme === COLOR_THEME.DARK) {
      themeColors = DarkColors;
    } else if (selectedTheme === COLOR_THEME.SYSTEM_DEFAULT) {
      themeColors = systemTheme === 'dark' ? DarkColors : LightColors;
    }
    return {
      colors: themeColors,
    };
  }, [selectedTheme, systemTheme]);

  return (
    <ColorContext.Provider value={colorContextValue}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = (): IColorContext => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
};

export default ColorContext;
