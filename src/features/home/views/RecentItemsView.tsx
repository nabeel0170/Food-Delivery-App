import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import RecentItemOrderCard from '@/features/home/components/RecentItemCard';
import { createStyleSheet, useAppSelector, useAppStyles } from '@/hooks';
import { selectRestaurants } from '@/store/selectors/restaurantsSelector';
import { RecentOrderItem } from '@/types';

// RecentItemsView displays a horizontal list of recent orders for quick reordering.
// Uses selector to fetch data and delegates rendering to RecentItemOrderCard.
const RecentItemsView = ({
  onReorderPress,
}: {
  onReorderPress: (item: RecentOrderItem) => void;
}) => {
  const styles = useAppStyles(stylesFunc);
  const { recentOrders } = useAppSelector(selectRestaurants);

  // Render each recent order as a RecentItemOrderCard
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
        data={recentOrders}
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
