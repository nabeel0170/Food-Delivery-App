import { ScrollView } from 'react-native-gesture-handler';

import PromotionalBanner from '@/features/categories/components/PromotionalBanner';
import CategoryGridView from '@/features/categories/views/CategoryGridView';
import PopularCategoriesView from '@/features/categories/views/PopularCategoriesView';
import { createStyleSheet, useAppStyles } from '@/hooks';

const CategoriesScreen = () => {
  const styles = useAppStyles(stylesFunc);
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
    paddingHorizontal: 16,
  },
}));
