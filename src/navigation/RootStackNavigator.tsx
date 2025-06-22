import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { ROOT_STACK_SCREENS } from '@/constants/NavigationConstants';

export type RootStackParams = {
  [ROOT_STACK_SCREENS.EXAMPLE]: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  const options: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName={ROOT_STACK_SCREENS.EXAMPLE}
      screenOptions={options}
      //This id is set to resolve the issue with an undefined id issue in react navigation
    >
      <Stack.Screen component={() => null} name={ROOT_STACK_SCREENS.EXAMPLE} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
