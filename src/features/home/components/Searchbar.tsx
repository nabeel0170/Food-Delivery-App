import { Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { useColors } from '@/contexts';
import { createStyleSheet, useAppStyles } from '@/hooks';

const SearchBar = () => {
  const styles = useAppStyles(stylesFunc);
  const [searchValue, setSearchValue] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const { colors } = useColors();

  const handleSearchPress = () => {
    setSearchActive(true);
  };

  return (
    <View
      style={
        searchActive ? styles.activeSearchContainer : styles.searchContainer
      }>
      <Search color={colors.icon.default} size={18} style={styles.icon} />
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
  },
  activeSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.subtle,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: colors.icon.default,
    borderWidth: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    padding: 0,
  },
}));
