import { Clock, Star } from 'lucide-react-native';
import { Image, Pressable, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';
import { Restaurant } from '@/types';

// RestaurantCard displays a summary of a restaurant with image, rating, and delivery time.
// Used in lists or grids for restaurant selection.
const RestaurantCard = ({
  restaurant,
  onPress,
}: {
  restaurant: Restaurant;
  onPress: () => void;
}) => {
  const styles = useAppStyles(stylesFunc);

  return (
    // Pressable card for navigation or selection
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.content}>
        {/* Restaurant name (truncated if too long) */}
        <Text numberOfLines={1} style={styles.name}>
          {restaurant.name}
        </Text>
        <View style={styles.infoRow}>
          {/* Star rating */}
          <View style={styles.ratingContainer}>
            <Star color='#FFA500' size={14} />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
          {/* Delivery time with clock icon */}
          <View style={styles.timeContainer}>
            <Clock color='#6c7380' size={14} />
            <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const stylesFunc = createStyleSheet((colors) => ({
  card: {
    width: scale(160),
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: verticalScale(128),
  },
  content: {
    padding: scale(12),
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.default,
    marginBottom: verticalScale(8),
  },
  infoRow: {
    flexDirection: 'row',
    gap: scale(16),
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: colors.text.default,
    marginLeft: scale(4),
    fontWeight: '400',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTime: {
    fontSize: 14,
    color: colors.text.default,
    marginLeft: scale(4),
  },
}));
