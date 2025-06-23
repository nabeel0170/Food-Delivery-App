import { ChevronDown, MapPin } from 'lucide-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';

const DeliveryAddress = () => {
  const styles = useAppStyles(stylesFunc);

  return (
    <Pressable style={styles.container}>
      <MapPin color='#6c7380' size={20} style={styles.icon} />
      <View>
        <Text style={styles.label}>Deliver to</Text>
        <View style={styles.addressRow}>
          <Text style={styles.address}>123 Main St</Text>
          <ChevronDown color='black' size={16} style={styles.chevron} />
        </View>
      </View>
    </Pressable>
  );
};

export default DeliveryAddress;

const stylesFunc = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
  },
  icon: {
    marginRight: 8,
    marginTop: 2,
  },
  label: {
    fontSize: 12,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontSize: 16,
    fontWeight: '600',
  },
  chevron: {
    marginLeft: 4,
    marginTop: 2,
  },
}));
