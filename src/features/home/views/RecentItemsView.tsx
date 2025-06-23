import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { RecentOrderItem } from '@/constants';
import RecentItemOrderCard from '@/features/home/components/RecentItemCard';
import { createStyleSheet, useAppStyles } from '@/hooks';

// Sample data
const recentOrdersData: RecentOrderItem[] = [
  {
    id: '1',
    restaurantName: 'Pizza Palace',
    items: ['Margherita Pizza', 'Garlic Bread'],
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    restaurantName: 'Burger House',
    items: ['Classic Burger', 'French Fries'],
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    restaurantName: 'Sushi Corner',
    items: ['Salmon Roll', 'Miso Soup'],
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    restaurantName: 'Pasta Villa',
    items: ['Creamy Alfredo', 'Caesar Salad'],
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop',
  },
];

// RecentItemsView Component
const RecentItemsView = ({
  onReorderPress,
}: {
  onReorderPress: (item: RecentOrderItem) => void;
}) => {
  const styles = useAppStyles(stylesFunc);

  const renderItem = ({ item }: { item: RecentOrderItem }) => (
    <RecentItemOrderCard
      orderItem={item}
      onPress={() => onReorderPress?.(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Again</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={recentOrdersData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentItemsView;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    paddingBottom: verticalScale(30),
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
