import { Dimensions } from "react-native";
import { defaultHeightScreen, defaultWitdhScreen } from "./const";

const responsiveWidth = (width) => {
   return (Dimensions.get("window").width * width) / defaultWitdhScreen;
};

const responsiveHeight = (height) => {
   return (Dimensions.get("window").height * height) / defaultHeightScreen;
};

export { responsiveHeight, responsiveWidth };
