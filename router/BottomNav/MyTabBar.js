import React from "react";
import { View, StyleSheet } from "react-native";
import TabItem from "./TabItem";

const MyTabBar = ({ state, descriptors, navigation }) => {
   return (
      <View style={styles.container}>
         {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
               options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
               const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
               });

               if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true });
               }
            };

            const onLongPress = () => {
               navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
               });
            };

            return (
               <TabItem
                  onPress={onPress}
                  onLongPress={onLongPress}
                  options={options}
                  label={label}
                  isFocused={isFocused}
               />
            );
         })}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      backgroundColor: "#22668A",
      paddingVertical: 8,
      paddingHorizontal: 40,
      marginBottom: 40,
      marginHorizontal: 30,
      borderRadius: 15,
      justifyContent: "space-between",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
});

export default MyTabBar;
