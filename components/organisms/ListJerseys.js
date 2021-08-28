import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CardJersey from "../molecules/CardJersey";

const ListJerseys = ({ jerseys }) => {
   console.log("jer", jerseys);
   return (
      <View style={styles.container}>
         {jerseys.map((jersey, index) => {
            return <CardJersey jersey={jersey} key={index} />;
         })}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
   },
});

export default ListJerseys;
