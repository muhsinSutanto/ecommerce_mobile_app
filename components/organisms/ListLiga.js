import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helpers/utils";

const ListLiga = ({ ligas }) => {
   console.log("ligas", ligas);
   return (
      <View style={styles.container}>
         {ligas[0].map((liga, idx) => {
            return (
               <View style={styles.ImageContainer}>
                  <Image
                     source={require(`../../assets/images/${liga.image}`)}
                     style={styles.image}
                  />
               </View>
            );
         })}
      </View>
   );
};

const styles = StyleSheet.create({
   image: {
      width: responsiveWidth(57),
      height: responsiveHeight(57),
   },
   ImageContainer: {
      width: responsiveWidth(80),
      height: responsiveHeight(80),
      borderRadius: 10,
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   container: {
      flexDirection: "row",
      marginTop: 10,
   },
});

export default ListLiga;
