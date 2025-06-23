import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';

// FreeDeliveryCard promotes a free delivery offer with a gradient background.
// Uses a pressable button to trigger an action (e.g., start order).
const FreeDeliveryCard = ({ onPress }: { onPress: () => void }) => {
  const styles = useAppStyles(stylesFunc);

  return (
    <View style={styles.container}>
      {/* Gradient background for visual emphasis */}
      <LinearGradient
        colors={['#FF4B4B', '#FF8E3C']}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.title}>Free Delivery</Text>
          <Text style={styles.subtitle}>On your first order!</Text>

          {/* Call-to-action button */}
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Order Now</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default FreeDeliveryCard;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(24),
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text.white,
    marginBottom: verticalScale(4),
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.white,
    opacity: 0.9,
    marginBottom: verticalScale(16),
    fontWeight: '400',
  },
  button: {
    backgroundColor: colors.background.default,
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(50),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF4B4B',
  },
}));
