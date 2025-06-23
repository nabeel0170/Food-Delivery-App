import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';

import PromotionalBanner from '@/features/categories/components/PromotionalBanner';
import CategoryGridView from '@/features/categories/views/CategoryGridView';
import PopularCategoriesView from '@/features/categories/views/PopularCategoriesView';
import { createStyleSheet, useAppDispatch, useAppStyles } from '@/hooks';
import { fetchCategories } from '@/store/slices/categoriesSlice';

// CategoriesScreen is the main entry for browsing all categories.
// Fetches category data on mount and composes the categories UI sections.
const CategoriesScreen = () => {
  const styles = useAppStyles(stylesFunc);
  const dispatch = useAppDispatch();

  // Fetch categories when the screen mounts
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Layout: promotional banner, popular categories, and category grid
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <PromotionalBanner
        imageUrl='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
        subtitle='Up to 30% off on selected restaurants'
        title='Italian Special'
      />
      <PopularCategoriesView />
      <CategoryGridView />
    </ScrollView>
  );
};

export default CategoriesScreen;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    backgroundColor: colors.background.subtle,
    paddingHorizontal: scale(16),
  },
}));
