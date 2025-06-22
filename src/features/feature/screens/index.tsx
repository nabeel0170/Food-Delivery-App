import { Text, View } from 'react-native';

import { createStyleSheet, useAppSelector, useAppStyles } from '@/hooks';
import { selectApp } from '@/store/selectors';

const TestComponent = () => {
  const { selectedTheme } = useAppSelector(selectApp);
  const styles = useAppStyles(stylesFunc);
  return (
    <View style={styles.container}>
      <Text>index + {selectedTheme}</Text>
    </View>
  );
};

export default TestComponent;

const stylesFunc = createStyleSheet((colors) => ({
  container: {
    backgroundColor: colors.background.blue,
  },
}));
