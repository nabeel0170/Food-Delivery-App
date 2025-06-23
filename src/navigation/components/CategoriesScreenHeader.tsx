import { ChevronLeft, Search } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

import { useColors } from '@/contexts/ColorContext';

type CategoriesScreenHeaderProps = {
  title: string;
  onBackPress?: () => void;
  onSearchPress?: () => void;
  canGoBack?: boolean;
};

const CategoriesScreenHeader = ({
  title,
  onBackPress,
  onSearchPress,
  canGoBack,
}: CategoriesScreenHeaderProps) => {
  const { colors } = useColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background.default,
          shadowColor: colors.text.default,
        },
      ]}>
      {canGoBack && (
        <Pressable
          android_ripple={{ color: colors.icon.disabled }}
          style={styles.leftButton}
          onPress={onBackPress}>
          <ChevronLeft color={colors.text.default} size={24} />
        </Pressable>
      )}
      <Text style={[styles.title, { color: colors.text.default }]}>
        {title}
      </Text>
      <Pressable
        android_ripple={{ color: colors.icon.disabled }}
        style={styles.rightButton}
        onPress={onSearchPress}>
        <Search color={colors.text.default} size={24} />
      </Pressable>
    </View>
  );
};

export default CategoriesScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
  },
  leftButton: {
    padding: 8,
    marginRight: 8,
  },
  rightButton: {
    padding: 8,
    marginLeft: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});
