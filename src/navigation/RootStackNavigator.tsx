import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { ROOT_STACK_SCREENS } from '@/constants/NavigationConstants';
import BottomTabNavigator from '@/navigation/BottomTabNavigator';

export type RootStackParams = {
  [ROOT_STACK_SCREENS.BOTTOM_TABS_NAVIGATOR]: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const RootStackNavigator = () => {
  const options: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName={ROOT_STACK_SCREENS.BOTTOM_TABS_NAVIGATOR}
      screenOptions={options}
      //This id is set to resolve the issue with an undefined id issue in react navigation
    >
      <Stack.Screen
        component={BottomTabNavigator}
        name={ROOT_STACK_SCREENS.BOTTOM_TABS_NAVIGATOR}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
