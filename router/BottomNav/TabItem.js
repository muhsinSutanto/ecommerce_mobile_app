import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
   IconHome,
   IconHomeActive,
   IconCloth,
   IconClothActive,
   IconUser,
   IconUserActive,
} from "../../assets/icons";

const TabItem = ({ isFocused, options, onPress, onLongPress, label }) => {
   const Icon = () => {
      if (label === "Home") {
         return isFocused ? <IconHomeActive /> : <IconHome />;
      } else if (label === "Jersey") {
         return isFocused ? <IconClothActive /> : <IconCloth />;
      } else if (label === "Profile") {
         return isFocused ? <IconUserActive /> : <IconUser />;
      } else return <HomeActive />;
   };

   return (
      <TouchableOpacity
         accessibilityRole="button"
         accessibilityState={isFocused ? { selected: true } : {}}
         onPress={onPress}
         onLongPress={onLongPress}
         style={styles.container}
      >
         <Icon />
         <Text style={{ color: isFocused ? "#FFFFFF" : "#6AB1D7", fontSize: 10, marginTop: 5 }}>
            {label}
         </Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      //   flex: 1,
      alignItems: "center",
   },
   text: {
      color: "#FFFFFF",
   },
});

export default TabItem;
