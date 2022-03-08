import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import LoginScreen from "../Screens/LoginScreen";
import SearchScreen from "../Screens/SearchScreen";

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <BottomTabNavigation>
            </BottomTabNavigation>
        </NavigationContainer>
    )
}


function BottomTabNavigation() {
    return (
        <BottomTab.Navigator
            initialRouteName="Search"
            screenOptions={{
                headerShown: false,
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


function TabBarIcon(props) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}