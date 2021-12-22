export default {
  get: {
    color(key) {
      return this.pallet.colors[key];
    },
    styles: {
      button({ variant }) {
        return this.styles.buttons[variant];
      }
    }
  }
};
