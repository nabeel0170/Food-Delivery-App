import { useMemo } from 'react';
// this is intentional
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { StyleSheet } from 'react-native';

import { useColors } from '@/contexts/ColorContext';
import { IColor } from '@/types/Colors.types';

// eslint-disable-next-line no-unused-vars
export function useAppStyles<T>(stylesFunc: (colors: IColor) => T): T {
  const { colors } = useColors();
  return useMemo(() => stylesFunc(colors), [stylesFunc, colors]);
}

// this is intentional
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createStyleSheet<T extends StyleSheet.NamedStyles<any>>(
  // eslint-disable-next-line no-unused-vars
  stylesFunc: (colors: IColor) => T,
) {
  return (colors: IColor) => {
    return StyleSheet.create(stylesFunc(colors));
  };
}
