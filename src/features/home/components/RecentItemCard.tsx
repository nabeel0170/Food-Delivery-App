import { Image, Pressable, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';
import { RecentOrderItem } from '@/types';

// RecentItemOrderCard displays a summary of a recently ordered item.
// Includes an image, restaurant, items, and a reorder button for convenience.
const RecentItemOrderCard = ({
  orderItem,
  onPress,
}: {
  orderItem: RecentOrderItem;
  onPress: () => void;
}) => {
  const styles = useAppStyles(stylesFunc);

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        {/* Item image and info */}
        <Image source={{ uri: orderItem.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.restaurantName}>
            {orderItem.restaurantName}
          </Text>
          {/* List of items in the order */}
          <Text numberOfLines={2} style={styles.items}>
            {orderItem.items.join(', ')}
          </Text>
        </View>
      </View>
      {/* Reorder button for quick repeat order */}
      <Pressable style={styles.reorderButton} onPress={onPress}>
        <Text style={styles.reorderText}>Reorder</Text>
      </Pressable>
    </View>
  );
};
export default RecentItemOrderCard;

const stylesFunc = createStyleSheet((colors) => ({
  card: {
    width: scale(200),
    paddingHorizontal: scale(8),
    backgroundColor: colors.background.default,
    borderRadius: moderateScale(12),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: verticalScale(50),
    marginBottom: verticalScale(2),
  },
  image: {
    width: scale(48),
    height: scale(48),
    borderRadius: moderateScale(25),
    backgroundColor: '#F5F5F5',
    marginRight: scale(12),
  },
  textContainer: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.default,
  },
  items: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.text.secondary,
    lineHeight: moderateScale(16),
  },
  reorderButton: {
    backgroundColor: '#FF4444',
    paddingVertical: verticalScale(8),
    borderRadius: 50,
    alignItems: 'center',
  },
  reorderText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.white,
  },
}));
