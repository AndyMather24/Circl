import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import LoginScreen from "../Screens/LoginScreen";
import SearchScreen from "../Screens/SearchScreen";
import { Colors } from "../Styles/index";
import { colors } from "../Styles/colors";


const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();


export default function Navigation() {
    return (
        <NavigationContainer >  
            <RootNavigator/>
        </NavigationContainer>
    )
}



function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen}  />
    </Stack.Navigator>
  );
}

function BottomTabNavigation() {
    return (
        <BottomTab.Navigator
            initialRouteName="Search"
            screenOptions={{
                headerShown: false,
                tabBarStyle : styles.nav
            }}>
            <BottomTab.Screen
                name="search"
                component={SearchScreen}
                options={() => ({
                    tabBarShowLabel: false,
                    tabBarIcon: () => <TabBarIcon name="search" />
                })}
            >
            </BottomTab.Screen>

            <BottomTab.Screen
                name="bulleyes"
                component={LoginScreen}
                options={() => ({
                    tabBarShowLabel: false,
                    tabBarIcon: () => <TabBarIcon name="bullseye" />

                })}
            >
            </BottomTab.Screen>
            <BottomTab.Screen
                name="user profile"
                component={LoginScreen}
                options={() => ({
                    tabBarShowLabel: false,
                    tabBarIcon: () => <TabBarIcon name="user-o" />

                })}
            >
            </BottomTab.Screen>
        </BottomTab.Navigator >

    )
}

const styles = StyleSheet.create({
   nav : { backgroundColor: Colors.colors.primaryBackground, borderTopColor: Colors.colors.primaryBackground}
})

function TabBarIcon(props) {
    return <FontAwesome size={30} style={{ marginBottom: -3, color: Colors.colors.primaryFont }} {...props} />;
}