import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';

interface PromotionalBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onPress?: () => void;
}

// PromotionalBanner displays a clickable banner with background image, overlay, and call-to-action.
// Shows title and subtitle text over a darkened image.
const PromotionalBanner = ({
  title,
  subtitle,
  imageUrl,
  onPress,
}: PromotionalBannerProps) => {
  const styles = useAppStyles(stylesFunc);

  return (
    // TouchableOpacity wraps the image for CTA
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      {/* Background image with overlay */}
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{ uri: imageUrl }}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            {/* Banner title */}
            <Text style={styles.title}>{title}</Text>
            {/* Banner subtitle */}
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
    marginTop: verticalScale(16),
    borderRadius: scale(16),
    overflow: 'hidden',
  },
  backgroundImage: {
    height: verticalScale(120),
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: scale(16),
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: scale(16),
    height: verticalScale(140),
  },
  textContainer: {
    alignItems: 'flex-start',
    padding: scale(16),
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
    fontSize: 20,
    color: colors.text.white,
    opacity: 0.9,
  },
}));
