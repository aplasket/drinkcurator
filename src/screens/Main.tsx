import { SafeAreaView, Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from "./Profile";
import { Login } from "./Login";


const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}