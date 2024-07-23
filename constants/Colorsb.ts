const COLORS = {
  primaryGreen: "#10947E",
  Green: "#15BF64",
  Green_light: "#E8F9F0",
  lightGreen: "#3D7F74",
  lightGreen_50: "rgba(61, 127, 116, 0.5)",
  lightGreen_60: "rgba(61, 127, 116, 0.6)",
  lightGreen_70: "rgba(61, 127, 116, 0.7)",
  lightGreen_80: "rgba(61, 127, 116, 0.8)",
  lightGreen_90: "rgba(61, 127, 116, 0.9)",
  lightGreen_100: "rgba(61, 127, 116, 1)",
  lightGreen_200: "#9499A5",
  lightGreen_300: "#8D98AA",
  NavyBlue_40: "rgba(53, 87, 116, 0.4)",
  NavyBlue_50: "rgba(53, 87, 116, 0.5)",
  NavyBlue_60: "rgba(53, 87, 116, 0.6)",
  NavyBlue_70: "rgba(53, 87, 116, 0.7)",
  NavyBlue_80: "rgba(53, 87, 116, 0.8)",
  NavyBlue_90: "rgba(53, 87, 116, 0.9)",
  Secondary_NavyBlue_600: "#1C5C94",
  NavyBlue_100: "rgba(53, 87, 116, 1)",
  Success_40: "rgba(0, 146, 69, 0.4)",
  Success_50: "rgba(0, 146, 69, 0.5)",
  Success_60: "rgba(0, 146, 69, 0.6)",
  Success_70: "rgba(0, 146, 69, 0.7)",
  Success_80: "rgba(0, 146, 69, 0.8)",
  Success_90: "rgba(0, 146, 69, 0.9)",
  Success_100: "rgba(0, 146, 69, 1)",
  Warning_40: "rgba(255, 0, 0, 0.4)",
  Warning_50: "rgba(255, 0, 0, 0.5)",
  Warning_60: "rgba(255, 0, 0, 0.6)",
  Warning_70: "rgba(255, 0, 0, 0.7)",
  Warning_80: "rgba(255, 0, 0, 0.8)",
  Warning_90: "rgba(255, 0, 0, 0.9)",
  Warning_100: "rgba(255, 0, 0, 1)",
  Warning_500: "#B62020",
  Gray_50: "#F7FAF8",
  Gray_100: "#EDF0EE",
  Gray_200: "#E6EBE7",
  Gray_300: "#CBCFC8",
  Gray_400: "#9CA69D",
  Gray_500: "#7A807D",
  Gray_600: "#465649",
  input_gray: '#F1F1F1',
  Shade_white: "#FFFFFF",
  Shade_Black: "#000000",
  // Add gradient colors
  Gradient_1: ['#1EBCEC', '#1972BF'], // Example gradient
};

export const tintColorLight = "#000";
export const tintColorDark = "#fff";

export const light = {
  text: "#000",
  background: "#fff",
  tint: tintColorLight,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorLight,
};

export const dark = {
  text: "#fff",
  background: "#000",
  tint: tintColorDark,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorDark,
};

export default COLORS;
