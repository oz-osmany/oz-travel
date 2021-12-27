import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    blue:"#263DB4",
    lightblue:"#8991c3",
    lblue:"#5bb1d9",
    transparentBlack: 'rgba(0, 0, 0, 0.2)',
    transparentBlacky: 'rgba(0, 0, 0, 0.5)',
    red: "#C61234",
    lightgreen: "#9DDEBA",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#e6e6f5",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    transparentgray: 'rgba(192, 192, 192,0.7)',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1:    {  fontSize: SIZES.h1, lineHeight: 36 },
    h2:    {  fontSize: SIZES.h2, lineHeight: 30 },
    h3:    {  fontSize: SIZES.h3, lineHeight: 22 },
    h4:    {  fontSize: SIZES.h4, lineHeight: 22 },
    body1: {  fontSize: SIZES.body1, lineHeight: 36 },
    body2: {  fontSize: SIZES.body2, lineHeight: 30 },
    body3: {  fontSize: SIZES.body3, lineHeight: 22 },
    body4: {  fontSize: SIZES.body4, lineHeight: 22 },
    body5: {  fontSize: SIZES.body5, lineHeight: 22 },
};
export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
});

const appTheme = { COLORS, SIZES, FONTS,styles };

export default appTheme;