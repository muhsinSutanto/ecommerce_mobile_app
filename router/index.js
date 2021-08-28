import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import JersyeScreen from "../screens/JerseyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MyTabBar from "./BottomNav/MyTabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
   return (
      <Tab.Navigator initialRouteName="HomeScreen" tabBar={(props) => <MyTabBar {...props} />}>
         <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <Tab.Screen name="Jersey" component={JersyeScreen} options={{ headerShown: false }} />
         <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
   );
};

const Router = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
         />
         <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      </Stack.Navigator>
   );
};

export default Router;
