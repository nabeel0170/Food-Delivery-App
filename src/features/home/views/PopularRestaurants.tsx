import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { Restaurant } from '@/constants';
import RestaurantCard from '@/features/home/components/RestaurantCard';
import { createStyleSheet, useAppStyles } from '@/hooks';

// Sample data - you can replace this with your actual data
const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    rating: 4.5,
    deliveryTime: '25-35 min',
  },
  {
    id: '2',
    name: 'Burger House',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.8,
    deliveryTime: '20-30 min',
  },
  {
    id: '3',
    name: 'Sushi Corner',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop',
    rating: 4.6,
    deliveryTime: '30-40 min',
  },
  {
    id: '4',
    name: 'Pasta Villa',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop',
    rating: 4.3,
    deliveryTime: '25-35 min',
  },
];

const PopularRestaurants = ({
  onRestaurantPress,
}: {
  onRestaurantPress: (restaurant: Restaurant) => void;
}) => {
  const styles = useAppStyles(stylesFunc);

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
        data={RESTAURANTS_DATA}
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
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: colors.text.default,
    marginBottom: verticalScale(16),
  },
  separator: {
    width: scale(12),
  },
}));
