import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import DealItemCard from '@/features/home/components/DealItemCard';
import { createStyleSheet, useAppStyles } from '@/hooks';

interface DealItem {
  id: string;
  restaurantName: string;
  itemName: string;
  image: string;
  currentPrice: string;
  originalPrice: string;
  discount: number;
}

const dealsData: DealItem[] = [
  {
    id: '1',
    restaurantName: 'Pizza Palace',
    itemName: 'Margherita Pizza',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    currentPrice: '12.99',
    originalPrice: '15.99',
    discount: 20,
  },
  {
    id: '2',
    restaurantName: 'Burger House',
    itemName: 'Classic Burger',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    currentPrice: '8.99',
    originalPrice: '10.99',
    discount: 15,
  },
  {
    id: '3',
    restaurantName: 'Sushi Corner',
    itemName: 'Salmon Roll Set',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop',
    currentPrice: '18.99',
    originalPrice: '24.99',
    discount: 25,
  },
  {
    id: '4',
    restaurantName: 'Pasta Villa',
    itemName: 'Creamy Alfredo',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop',
    currentPrice: '14.99',
    originalPrice: '17.99',
    discount: 18,
  },
];

const SpecialOffers = ({
  onItemPress,
}: {
  onItemPress: (item: DealItem) => void;
}) => {
  const styles = useAppStyles(stylesFunc);

  const renderItem = ({ item }: { item: DealItem }) => (
    <DealItemCard dealItem={item} onPress={() => onItemPress?.(item)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today&apos;s Special Offers</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={dealsData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SpecialOffers;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    paddingVertical: verticalScale(10),
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
