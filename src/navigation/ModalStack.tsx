import { NavigationContainer } from '@react-navigation/native';
import {
  createModalStack,
  ModalOptions,
  ModalProvider,
  ModalStackConfig,
} from 'react-native-modalfy';

import { MODAL_STACK } from '@/constants/NavigationConstants';
import { BottomSheetProvider } from '@/contexts/BottomSheetContext';
import { useDefaultHooks } from '@/hooks';
import RootStackNavigator from '@/navigation/RootStackNavigator';

export type RootModalStackParams = {
  [MODAL_STACK.EXAMPLE]: undefined;
};

const modalConfig: ModalStackConfig = {
  [MODAL_STACK.EXAMPLE]: {
    modal: () => null,
    backBehavior: 'pop',
  },
};

const defaultOptions: ModalOptions = {
  backdropOpacity: 0.6,
  disableFlingGesture: true,
};
const stack = createModalStack<RootModalStackParams>(
  modalConfig,
  defaultOptions,
);

const ModalStack = () => {
  useDefaultHooks();

  return (
    <NavigationContainer>
      <ModalProvider stack={stack}>
        <BottomSheetProvider>
          <RootStackNavigator />
        </BottomSheetProvider>
      </ModalProvider>
    </NavigationContainer>
  );
};

export default ModalStack;
