import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';

interface PromotionalBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onPress?: () => void;
}

const PromotionalBanner = ({
  title,
  subtitle,
  imageUrl,
  onPress,
}: PromotionalBannerProps) => {
  const styles = useAppStyles(stylesFunc);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{ uri: imageUrl }}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PromotionalBanner;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    marginVertical: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  backgroundImage: {
    height: verticalScale(100),
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    height: verticalScale(140),
  },
  textContainer: {
    alignItems: 'flex-start',
    padding: 16,
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.white,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.white,
    opacity: 0.9,
  },
}));
