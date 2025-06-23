import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import DealItemCard from '@/features/home/components/DealItemCard';
import { createStyleSheet, useAppSelector, useAppStyles } from '@/hooks';
import { selectRestaurants } from '@/store/selectors/restaurantsSelector';
import { DealItem } from '@/store/slices/restaurantsSlice';

// SpecialOffers displays a horizontal list of today's special food deals.
// Uses selector to fetch data and delegates rendering to DealItemCard.
const SpecialOffers = ({
  onItemPress,
}: {
  onItemPress: (item: DealItem) => void;
}) => {
  const styles = useAppStyles(stylesFunc);
  const { specialOffers } = useAppSelector(selectRestaurants);

  // Render each deal as a DealItemCard
  const renderItem = ({ item }: { item: DealItem }) => (
    <DealItemCard dealItem={item} onPress={() => onItemPress?.(item)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today&apos;s Special Offers</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={specialOffers}
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
