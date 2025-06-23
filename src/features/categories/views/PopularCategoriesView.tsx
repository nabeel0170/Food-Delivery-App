import React from 'react';
import { Text, View } from 'react-native';

import CategoryFilters from '@/features/categories/components/CategoryFilters';
import { createStyleSheet, useAppStyles } from '@/hooks';

// PopularCategoriesView displays a titled section with a horizontal list of category filters.
// Uses CategoryFilters to allow quick category selection.
const PopularCategoriesView = () => {
  const styles = useAppStyles(stylesFunc);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Categories</Text>
      <CategoryFilters />
    </View>
  );
};

export default PopularCategoriesView;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    backgroundColor: colors.background.subtle,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.text.default,
  },
}));
