import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { color } from "react-native-reanimated";
import { IconCart, IconLoop } from "../../assets/icons";
import { responsiveHeight, responsiveWidth } from "../../helpers/utils";
import Button from "../molecules/Button";

const HeaderComponent = () => {
   console.log("height", responsiveHeight(25));
   return (
      <View style={styles.container}>
         <View style={styles.inputWrapper}>
            <View style={styles.inputContainer}>
               <IconLoop />
               <TextInput style={styles.input} placeholder="Cari Jersey" />
            </View>
            <Button icon="cart" totalItem={2} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#22668A",
      height: responsiveHeight(125),
   },
   inputContainer: {
      backgroundColor: "#ffffff",
      height: responsiveHeight(53),
      width: responsiveWidth(286),
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 12,
   },
   input: {
      fontSize: 18,
      color: "#000000",
      paddingLeft: 12,
   },
   inputWrapper: {
      flexDirection: "row",
      marginTop: 20,
      marginLeft: 30,
   },
});

export default HeaderComponent;
