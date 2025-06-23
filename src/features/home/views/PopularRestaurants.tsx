import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import RestaurantCard from '@/features/home/components/RestaurantCard';
import { createStyleSheet, useAppSelector, useAppStyles } from '@/hooks';
import { selectRestaurants } from '@/store/selectors/restaurantsSelector';
import { Restaurant } from '@/types';

// PopularRestaurants displays a horizontal list of popular restaurants.
// Uses selector to fetch data and delegates rendering to RestaurantCard.
const PopularRestaurants = ({
  onRestaurantPress,
}: {
  onRestaurantPress: (restaurant: Restaurant) => void;
}) => {
  const styles = useAppStyles(stylesFunc);
  const { popularRestaurants } = useAppSelector(selectRestaurants);
  // Render each restaurant as a RestaurantCard
  const renderRestaurant = ({ item }: { item: Restaurant }) => (
    <RestaurantCard
      restaurant={item}
      onPress={() => onRestaurantPress?.(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Restaurants</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={popularRestaurants}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurant}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularRestaurants;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    paddingTop: verticalScale(10),
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.default,
    marginBottom: verticalScale(16),
  },
  separator: {
    width: scale(12),
  },
}));
