import React from 'react';
import { FlatList } from 'react-native';

import { createStyleSheet, useAppStyles } from '@/hooks';

import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    imageUrl: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    title: 'Pizza & Pasta',
    subtitle: '156 restaurants',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
    title: 'Burgers',
    subtitle: '142 restaurants',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    title: 'Asian Food',
    subtitle: '198 restaurants',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    title: 'Healthy Food',
    subtitle: '89 restaurants',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    title: 'Healthy Food',
    subtitle: '89 restaurants',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    title: 'Healthy Food',
    subtitle: '89 restaurants',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    title: 'Healthy Food',
    subtitle: '89 restaurants',
  },
];

const CategoryGridView = () => {
  const styles = useAppStyles(stylesFunc);
  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapper}
      data={categories}
      keyExtractor={(_, i) => i.toString()}
      numColumns={2}
      renderItem={({ item }) => <CategoryCard {...item} />}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const stylesFunc = createStyleSheet(() => ({
  columnWrapper: {
    justifyContent: 'space-between',
  },
}));

export default CategoryGridView;
