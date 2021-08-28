import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useState } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helpers/utils";
import { colors } from "../../helpers/const";

class BannerSlider extends Component {
   constructor(props) {
      super(props);
      this.state = {
         images: [
            require("../../assets/images/slider1.png"),
            require("../../assets/images/slider2.png"),
         ],
      };
   }
   render() {
      return (
         <View style={styles.container}>
            <SliderBox
               auto
               images={this.state.images}
               autoplay={true}
               circleLoop={true}
               sliderBoxHeight={responsiveHeight(132)}
               ImageComponentStyle={styles.slider}
               dotStyle={styles.dot}
               dotColor={colors.primary}
               imageLoadingColor={colors.primary}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      marginTop: -15,
   },
   slider: {
      borderRadius: 10,
      width: responsiveWidth(354),
   },
   dot: {
      width: 10,
      height: 5,
      borderRadius: 4,
   },
});

export default BannerSlider;
