import { Image, Pressable, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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

// DealItemCard displays a promotional food deal with image, prices, and discount badge.
// Used in horizontal lists or grids to promote special items.
const DealItemCard = ({
  dealItem,
  onPress,
}: {
  dealItem: DealItem;
  onPress: () => void;
}) => {
  const styles = useAppStyles(stylesFunc);

  return (
    // Pressable allows navigation or selection when the card is tapped.
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        {/* Item image with overlayed discount badge */}
        <Image source={{ uri: dealItem.image }} style={styles.image} />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-{dealItem.discount}%</Text>
        </View>
      </View>
      <View style={styles.content}>
        {/* Restaurant name (truncated if too long) */}
        <Text numberOfLines={1} style={styles.restaurantName}>
          {dealItem.restaurantName}
        </Text>
        {/* Item name (truncated if too long) */}
        <Text numberOfLines={1} style={styles.itemName}>
          {dealItem.itemName}
        </Text>
        <View style={styles.priceRow}>
          {/* Current price highlighted */}
          <Text style={styles.currentPrice}>${dealItem.currentPrice}</Text>
          {/* Original price shown with strikethrough */}
          <Text style={styles.originalPrice}>${dealItem.originalPrice}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DealItemCard;

const stylesFunc = createStyleSheet((colors) => ({
  card: {
    width: scale(150),
    backgroundColor: colors.background.default,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: verticalScale(80),
    backgroundColor: '#F5F5F5',
  },
  discountBadge: {
    position: 'absolute',
    top: verticalScale(8),
    left: scale(8),
    backgroundColor: '#FF4444',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(16),
  },
  discountText: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  content: {
    padding: scale(12),
  },
  restaurantName: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: colors.text.secondary,
    marginBottom: verticalScale(4),
  },
  itemName: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.text.default,
    marginBottom: verticalScale(8),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  currentPrice: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#FF4444',
  },
  originalPrice: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: colors.text.secondary,
    textDecorationLine: 'line-through',
  },
}));
