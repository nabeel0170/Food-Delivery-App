import {
  Carrot,
  Coffee,
  Fish,
  IceCreamBowl as IceCream,
  LayoutGrid,
  LucidePizza,
  LucideProps,
  Sandwich,
  SoupIcon,
} from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { useColors } from '@/contexts';
import { createStyleSheet, useAppStyles } from '@/hooks';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<LucideProps>;
}

const categories: Category[] = [
  { id: '1', name: 'Pizza', icon: LucidePizza },
  { id: '2', name: 'Burgers', icon: LayoutGrid },
  { id: '3', name: 'Sushi', icon: SoupIcon },
  { id: '4', name: 'Salads', icon: Carrot },
  { id: '5', name: 'Coffee', icon: Coffee },
  { id: '6', name: 'Sandwiches', icon: Sandwich },
  { id: '7', name: 'Desserts', icon: IceCream },
  { id: '8', name: 'Seafood', icon: Fish },
];

// CategoryFilters displays a horizontal list of selectable categories with icons.
// Highlights the selected category and updates state on press.
const CategoryFilters = () => {
  const styles = useAppStyles(stylesFunc);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const { colors } = useColors();

  // Update selected category when pressed
  const handleCategoryPress = (category: Category) => {
    setSelectedCategoryId(category.id);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => {
          const isSelected = selectedCategoryId === category.id;
          const IconComponent = category.icon;

          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={category.id}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(category)}>
              <View
                style={[
                  styles.iconContainer,
                  isSelected && styles.selectedItem,
                ]}>
                {/* Render icon with highlight if selected */}
                <IconComponent
                  color={isSelected ? colors.text.white : '#ff3b30'}
                  height={verticalScale(32)}
                  strokeWidth={2}
                  width={scale(32)}
                />
              </View>
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.selectedText,
                ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryFilters;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    paddingVertical: verticalScale(16),
    backgroundColor: colors.background.subtle,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: scale(8),
  },
  selectedItem: {
    backgroundColor: '#ff3b30',
  },
  iconContainer: {
    width: scale(72),
    height: verticalScale(72),
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(8),
    backgroundColor: colors.text.white,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
    textAlign: 'center',
  },
  selectedText: {
    color: '#ff3b30',
    fontWeight: '700',
  },
}));
