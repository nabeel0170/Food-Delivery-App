import { Image, Pressable, Text } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';

export type CategoryCardProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

const CategoryCard = ({ imageUrl, title, subtitle }: CategoryCardProps) => {
  const styles = useAppStyles(stylesFunc);

  return (
    // Pressable for category selection or navigation
    <Pressable style={styles.card}>
      {/* Category image */}
      <Image source={{ uri: imageUrl }} style={styles.image} />
      {/* Category title */}
      <Text style={styles.title}>{title}</Text>
      {/* Category subtitle/description */}
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
};

const stylesFunc = createStyleSheet((colors) => ({
  card: {
    borderRadius: scale(12),
    backgroundColor: colors.background.default,
    overflow: 'hidden',
    flex: 1,
    margin: scale(8),
  },
  image: {
    width: '100%',
    height: verticalScale(110),
    borderTopLeftRadius: scale(12),
    borderTopRightRadius: scale(12),
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: verticalScale(12),
    marginVertical: verticalScale(4),
    marginHorizontal: scale(12),
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: verticalScale(12),
    marginHorizontal: scale(12),
  },
}));

export default CategoryCard;
