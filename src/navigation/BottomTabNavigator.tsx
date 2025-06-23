import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { House, List, Search, ShoppingCart, User2 } from 'lucide-react-native';
import { verticalScale } from 'react-native-size-matters';

import { BOTTOM_TAB_SCREENS } from '@/constants/NavigationConstants';
import { useColors } from '@/contexts/ColorContext';
import CategoriesScreen from '@/features/categories/screens/CategoriesScreen';
import HomeScreen from '@/features/home/screens/homeScreen';
import CategoriesScreenHeader from '@/navigation/components/CategoriesScreenHeader';

export type BottomTabParams = {
  [BOTTOM_TAB_SCREENS.HOME]: undefined;
  [BOTTOM_TAB_SCREENS.SEARCH]: undefined;
  [BOTTOM_TAB_SCREENS.ORDERS]: undefined;
  [BOTTOM_TAB_SCREENS.CART]: undefined;
  [BOTTOM_TAB_SCREENS.PROFILE]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

const HomeIcon = ({ color }: { color: string }) => (
  <House color={color} size={28} strokeWidth={2} />
);

const SearchIcon = ({ color }: { color: string }) => (
  <Search color={color} size={28} strokeWidth={2} />
);

const OrdersIcon = ({ color }: { color: string }) => (
  <List color={color} size={28} strokeWidth={2} />
);

const CartIcon = ({ color }: { color: string }) => (
  <ShoppingCart color={color} size={28} strokeWidth={2} />
);

const ProfileIcon = ({ color }: { color: string }) => (
  <User2 color={color} size={28} strokeWidth={2} />
);

const BottomTabNavigator = () => {
  const { colors } = useColors();

  const options: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarLabelStyle: {
      marginTop: verticalScale(4),
      fontSize: 12,
    },
    tabBarStyle: {
      backgroundColor: colors.background.default,
      minHeight: verticalScale(55),
    },
    tabBarItemStyle: { paddingVertical: verticalScale(10) },
    tabBarActiveTintColor: '#ff3b30',
    tabBarInactiveTintColor: colors.icon.disabled,
  };

  const homeOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
  };

  const searchOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color }) => <SearchIcon color={color} />,
    headerShown: true,
    header: ({ navigation }) => (
      <CategoriesScreenHeader
        canGoBack={true}
        title='Categories'
        onBackPress={() => navigation.goBack()}
      />
    ),
  };

  const ordersOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color }) => <OrdersIcon color={color} />,
  };

  const cartOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color }) => <CartIcon color={color} />,
  };

  const profileOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
  };

  return (
    <Tab.Navigator
      initialRouteName={BOTTOM_TAB_SCREENS.HOME}
      screenOptions={options}
      //This id is set to resolve the undefined id issue in react navigation
    >
      <Tab.Screen
        component={HomeScreen}
        name={BOTTOM_TAB_SCREENS.HOME}
        options={homeOptions}
      />
      <Tab.Screen
        component={CategoriesScreen}
        name={BOTTOM_TAB_SCREENS.SEARCH}
        options={searchOptions}
      />
      <Tab.Screen
        component={() => null}
        name={BOTTOM_TAB_SCREENS.ORDERS}
        options={ordersOptions}
      />
      <Tab.Screen
        component={() => null}
        name={BOTTOM_TAB_SCREENS.CART}
        options={cartOptions}
      />
      <Tab.Screen
        component={() => null}
        name={BOTTOM_TAB_SCREENS.PROFILE}
        options={profileOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
