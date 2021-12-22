import { ThemeProvider } from "styled-components";
import Buttons from "./Buttons";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Buttons />
    </ThemeProvider>
  );
}
