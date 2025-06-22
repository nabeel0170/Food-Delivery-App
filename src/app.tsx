import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ColorProvider } from '@/contexts';
import TestComponent from '@/features/feature/screens';
import { persistor, store } from '@/store';

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ColorProvider>
            <SafeAreaView>
              <TestComponent />
            </SafeAreaView>
          </ColorProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
