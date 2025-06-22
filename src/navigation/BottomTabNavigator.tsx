import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { verticalScale } from 'react-native-size-matters';

import { BOTTOM_TAB_SCREENS } from '@/constants/NavigationConstants';
import { useColors } from '@/contexts/ColorContext';

export type BottomTabParams = {
  [BOTTOM_TAB_SCREENS.EXAMPLE]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

const MyTabs = () => {
  const { colors } = useColors();

  const options: BottomTabNavigationOptions = {
    tabBarLabelStyle: {
      marginTop: verticalScale(4),
    },
    tabBarStyle: {
      backgroundColor: colors.background.default,
      height: verticalScale(70),
      paddingBottom: verticalScale(20),
    },
    tabBarItemStyle: { paddingVertical: verticalScale(10) },
    tabBarActiveTintColor: colors.icon.secondary,
    tabBarInactiveTintColor: colors.icon.disabled,
  };

  return (
    <Tab.Navigator
      initialRouteName={BOTTOM_TAB_SCREENS.EXAMPLE}
      screenOptions={options}
      //This id is set to resolve the undefined id issue in react navigation
    >
      <Tab.Screen component={() => null} name={BOTTOM_TAB_SCREENS.EXAMPLE} />
    </Tab.Navigator>
  );
};

export default MyTabs;
