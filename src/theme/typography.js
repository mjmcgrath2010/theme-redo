const fontFamilies = {
  sansFamilies: ["Open Sans", "Raleway"],
  serifFamilies: ["Open Sans", "Raleway"],
  sans: (val) => this.sansFamilies[val + 1] || this.sansFamilies[0],
  serif: (val) => this.serifFamilies[val + 1] || this.serifFamilies[0]
};

const fontSizeUnits = [0, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24];

const fontSize = (val) => `${fontSizeUnits[val]}px`;

const fontSizes = {
  xs: fontSize(1),
  sm: fontSize(2),
  md: fontSize(3),
  subtle: fontSize(4),
  label: fontSize(6),
  body: fontSize(7),
  ...fontSizeUnits.reduce((accumlator, size, idx) => {
    if (!size) {
      return accumlator;
    }
    return {
      ...accumlator,
      [size]: fontSize(idx)
    };
  }, {})
};

export default {
  fontSize,
  fontSizes,
  fontFamilies
};
