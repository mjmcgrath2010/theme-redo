import { tint, getLuminance, saturate } from "polished";

const generateColorTokens = (name, color) => {
  const colorGrades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const colorObj = colorGrades.reduce((accumlator, currentColor, idx) => {
    return {
      ...accumlator,
      [`${name}_${currentColor}`]:
        colorGrades.indexOf(idx) + 1 === colorGrades.length || !idx
          ? color
          : getLuminance(accumlator[`${name}_${colorGrades[idx]}`] || color) >
            50
          ? saturate(0.05, accumlator[`${name}_${colorGrades[idx] || color}`])
          : tint(0.05, accumlator[`${name}_${colorGrades[idx]}`] || color)
    };
  }, {});

  return colorObj;
};

export default {
  // Mapping for convience
  primary: {
    main: "purple"
  },
  secondary: {
    main: "teal"
  },
  error: {
    main: "red"
  },
  info: {
    main: "blue"
  },
  success: {
    main: "green"
  },
  warning: {
    main: "yellow"
  },
  danger: {
    main: "pink"
  },
  disabled: {
    main: "grey"
  },
  // All colors used in the theme
  colors: {
    green: {
      ...generateColorTokens("green", "#1b5e20")
    },
    blue: {},
    purple: {},
    yellow: {},
    red: {},
    pink: {},
    grey: {},
    black: {},
    white: {}
  }
};
