import { ScrollView } from 'react-native-gesture-handler';
import { verticalScale } from 'react-native-size-matters';

import CategoryList from '@/features/home/components/Categories';
import DeliveryAddress from '@/features/home/components/DeliveryAddress';
import FreeDeliveryCard from '@/features/home/components/FreeDeliveryCard';
import SearchBar from '@/features/home/components/Searchbar';
import PopularRestaurants from '@/features/home/views/PopularRestaurants';
import RecentItemsView from '@/features/home/views/RecentItemsView';
import SpecialOffers from '@/features/home/views/SpecialOffers';
import { createStyleSheet, useAppStyles } from '@/hooks';

const HomeScreen = () => {
  const styles = useAppStyles(stylesFunc);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <DeliveryAddress />
      <SearchBar />
      <CategoryList />
      <FreeDeliveryCard onPress={() => {}} />
      <PopularRestaurants onRestaurantPress={() => {}} />
      <SpecialOffers onItemPress={() => {}} />
      <RecentItemsView onReorderPress={() => {}} />
    </ScrollView>
  );
};

export default HomeScreen;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    backgroundColor: colors.background.default,
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(16),
  },
}));
