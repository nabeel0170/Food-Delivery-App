import { Fish, Home, Pizza, Sandwich, Soup } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Pressable, Text } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { createStyleSheet, useAppStyles } from '@/hooks';

type Category = {
  key: string;
  label: string;
  icon: React.ElementType;
};

const CATEGORY_DATA: Category[] = [
  { key: 'all', label: 'All', icon: Home },
  { key: 'pizza', label: 'Pizza', icon: Pizza },
  { key: 'burgers', label: 'Burgers', icon: Sandwich },
  { key: 'sushi', label: 'Sushi', icon: Fish },
  { key: 'chinese', label: 'Chinese', icon: Soup },
];

const CategoryList = () => {
  const styles = useAppStyles(stylesFunc);
  const [selectedKey, setSelectedKey] = useState('all');
  // Use refs to store Animated.Value for each category for efficient updates.
  const animatedValues = useRef(
    CATEGORY_DATA.reduce(
      (acc, item) => {
        acc[item.key] = new Animated.Value(item.key === 'all' ? 1 : 0);
        return acc;
      },
      {} as Record<string, Animated.Value>,
    ),
  ).current;

  // Animate background color for each category when selection changes.
  useEffect(() => {
    CATEGORY_DATA.forEach((item) => {
      Animated.timing(animatedValues[item.key], {
        toValue: item.key === selectedKey ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [selectedKey, animatedValues]);

  // Handle user selecting a category tab.
  const handlePress = (key: string) => {
    setSelectedKey(key);
  };
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={CATEGORY_DATA}
      horizontal
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        const Icon = item.icon;
        const isSelected = item.key === selectedKey;
        // Interpolate background color for smooth animated highlight.
        const bgInterpolation = animatedValues[item.key].interpolate({
          inputRange: [0, 1],
          outputRange: ['#f2f3f5', '#ff3b30'],
        });

        return (
          <Pressable style={styles.item} onPress={() => handlePress(item.key)}>
            <Animated.View
              style={[
                { backgroundColor: bgInterpolation },
                styles.iconContainerBase,
              ]}>
              <Icon color={isSelected ? '#fff' : '#2c2c2c'} size={24} />
            </Animated.View>
            <Text style={styles.label}>{item.label}</Text>
          </Pressable>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryList;

const stylesFunc = createStyleSheet(() => ({
  listContainer: { paddingVertical: verticalScale(12) },
  item: {
    alignItems: 'center',
    marginRight: scale(27),
  },
  iconContainerBase: {
    borderRadius: 40,
    padding: 14,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
}));
