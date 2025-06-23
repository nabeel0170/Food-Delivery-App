import { Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { useColors } from '@/contexts';
import { createStyleSheet, useAppStyles } from '@/hooks';

// SearchBar provides a styled input for searching restaurants or dishes.
// Manages focus state to update styling when active.
const SearchBar = () => {
  const styles = useAppStyles(stylesFunc);
  const [searchValue, setSearchValue] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const { colors } = useColors();

  // Set active state when input is focused
  const handleSearchPress = () => {
    setSearchActive(true);
  };

  return (
    <View
      style={
        searchActive ? styles.activeSearchContainer : styles.searchContainer
      }>
      <Search color={colors.icon.default} size={20} style={styles.icon} />
      <TextInput
        placeholder='Search restaurants, dishes...'
        placeholderTextColor='#6c7380'
        style={styles.input}
        value={searchValue}
        onBlur={() => setSearchActive(false)}
        onChangeText={setSearchValue}
        onFocus={handleSearchPress}
      />
    </View>
  );
};

export default SearchBar;

const stylesFunc = createStyleSheet((colors) => ({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.subtle,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 48,
    boxSizing: 'border-box',
  },
  activeSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.subtle,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: colors.icon.default,
    height: 48,
    borderWidth: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 0,
  },
}));
