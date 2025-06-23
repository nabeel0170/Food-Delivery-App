import React from 'react';
import { FlatList } from 'react-native';

import { createStyleSheet, useAppSelector, useAppStyles } from '@/hooks';
import { selectCategories } from '@/store/selectors/categoriesSelector';

import CategoryCard from '../components/CategoryCard';

// CategoryGridView displays categories in a two-column grid layout.
// Uses FlatList for efficient rendering and CategoryCard for each item.
const CategoryGridView = () => {
  const styles = useAppStyles(stylesFunc);
  const { categories } = useAppSelector(selectCategories);

  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapper}
      data={categories}
      keyExtractor={(_, i) => i.toString()}
      numColumns={2}
      renderItem={({ item }) => <CategoryCard {...item} />}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const stylesFunc = createStyleSheet(() => ({
  columnWrapper: {
    justifyContent: 'space-between',
  },
}));

export default CategoryGridView;
