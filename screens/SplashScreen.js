import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
   useEffect(() => {
      setTimeout(() => {
         navigation.replace("MainApp");
      }, 2000);
   });

   return (
      <View style={styles.background}>
         <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      </View>
   );
};

const styles = StyleSheet.create({
   background: {
      flex: 1,
      backgroundColor: "#FFF0A2",
      alignItems: "center",
      justifyContent: "center",
   },
   logo: {
      width: 260,
      height: 70,
   },
});

export default SplashScreen;
