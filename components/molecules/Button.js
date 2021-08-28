import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { IconCart } from "../../assets/icons";
import { colors } from "../../helpers/const";
import { responsiveHeight, responsiveWidth } from "../../helpers/utils";

const Button = (props) => {
   const Icon = () => {
      if (props.icon === "cart") {
         return <IconCart />;
      }
      return <IconCart />;
   };
   if (props.type === "text_only") {
      return (
         <TouchableOpacity style={styles.container_textOnly}>
            <Text style={styles.item_textOnly}>{props.title}</Text>
         </TouchableOpacity>
      );
   } else {
      return (
         <TouchableOpacity style={styles.container}>
            <Icon />
            {props.totalItem && (
               <View style={styles.itemContainer}>
                  <Text style={styles.item}>{props.totalItem}</Text>
               </View>
            )}
         </TouchableOpacity>
      );
   }
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#ffffff",
      paddingHorizontal: responsiveWidth(14),
      paddingVertical: responsiveHeight(14),
      marginLeft: 20,
      borderRadius: 5,
      height: responsiveHeight(53),
      width: responsiveWidth(53),
   },
   itemContainer: {
      backgroundColor: "red",
      padding: 3,
      position: "absolute",
      top: 5,
      right: 5,
   },
   item: { fontSize: 8, color: "#ffffff" },
   container_textOnly: {
      backgroundColor: colors.primary,
      borderRadius: 5,
      paddingVertical: 7,
      alignItems: "center",
   },
   item_textOnly: {
      fontSize: 13,
      color: "#ffffff",
      textTransform: "capitalize",
   },
});

export default Button;
