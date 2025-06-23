import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ColorProvider } from '@/contexts';
import { createStyleSheet, useAppStyles } from '@/hooks';
import ModalStack from '@/navigation/ModalStack';
import { persistor, store } from '@/store';

const App = () => {
  const styles = useAppStyles(stylesFunc);

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ColorProvider>
            <SafeAreaView style={styles.safeAreaView}>
              <ModalStack />
            </SafeAreaView>
          </ColorProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

const stylesFunc = createStyleSheet(() => ({
  safeAreaView: {
    flex: 1,
  },
}));

export default App;
