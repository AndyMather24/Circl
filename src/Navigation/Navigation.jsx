import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import { Colors } from '../Styles/index';
import TabBarIcon from '../Components/TabBarIcon';
const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.nav,
      }}
    >
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <TabBarIcon name="search" />,
        })}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="bulleyes"
        component={LoginScreen}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <TabBarIcon name="bullseye" />,
        })}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="user profile"
        component={LoginScreen}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <TabBarIcon name="user-o" />,
        })}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  nav: { backgroundColor: Colors.colors.primaryBackground, borderTopColor: Colors.colors.primaryBackground },
});
