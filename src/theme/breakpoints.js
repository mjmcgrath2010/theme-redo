export default {
  mobile: "@media all and (max-width: 668px)",
  tablet: "@media all and (max-width: 800px)",
  desktop: "@media all and (min-width: 800px)",
  minWidth: (minWidth) => `@media all and (min-width: ${minWidth}px)`,
  maxWidth: (maxWidth) => `@media all and (min-width: ${maxWidth}px)`
};
