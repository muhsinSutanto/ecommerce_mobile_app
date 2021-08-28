import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helpers/utils";
import Button from "./Button";

const CardJersey = ({ jersey }) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.card}>
            <Image
               style={styles.image}
               source={require(`../../assets/images/${jersey.gambar[0]}`)}
            />
            <Text style={styles.text}>{jersey.nama}</Text>
         </TouchableOpacity>
         <Button type="text_only" title="detail" />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginBottom: 32,
   },
   card: {
      width: responsiveWidth(150),
      backgroundColor: "#FFF6D5",
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
   },
   image: {
      width: responsiveWidth(124),
      height: responsiveHeight(124),
   },
   text: {
      fontSize: 13,
      fontWeight: "bold",
      textTransform: "lowercase",
      textAlign: "center",
   },
});
export default CardJersey;
