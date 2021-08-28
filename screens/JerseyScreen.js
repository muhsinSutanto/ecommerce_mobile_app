import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import HeaderComponent from "../components/organisms/HeaderComponent";
import ListLiga from "../components/organisms/ListLiga";
import { dummyLigas } from "../data/dummyLigas";
import { dummyJerseys } from "../data/dummyJerseys";
import ListJerseys from "../components/organisms/ListJerseys";
import Button from "../components/molecules/Button";

const JerseyScreen = () => {
   const ligas = useState(dummyLigas);
   const jerseys = useState(dummyJerseys);
   return (
      <View style={styles.container}>
         <HeaderComponent />
         <ScrollView showsVerticalScrollIndicator={false} style={styles.container_scroll}>
            <View style={styles.ligaSection}>
               <ListLiga ligas={ligas} />
            </View>
            <View style={styles.jerseySection}>
               <Text style={styles.jerseyLabel}>
                  Pilih <Text style={styles.jerseyLabelBold}>Jersey</Text> Yang Anda Inginkan
               </Text>
               <ListJerseys jerseys={jerseys[0]} />
               <Button type="text_only" title="lihat semua" />
            </View>
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FFFFFFF",
   },
   container_scroll: {
      marginTop: -20,
   },
   ligaSection: {
      marginHorizontal: 30,
   },
   jerseySection: {
      marginTop: 30,
      marginHorizontal: 30,
      marginBottom: 110,
   },
   jerseyLabel: {
      fontSize: 18,
      marginBottom: 21,
   },
   jerseyLabelBold: {
      fontWeight: "bold",
   },
});

export default JerseyScreen;
