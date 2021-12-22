import styled, { useTheme } from "styled-components";

const Button = styled.button`
  ${({ theme: { styles } }) => styles.buttons.primary}
`;

const Buttons = () => {
  const theme = useTheme();
  return (
    <div>
      <h4>buttons</h4>
      <Button>Black 7</Button>
      <span>{JSON.stringify(theme, null, 5)}</span>
    </div>
  );
};

export default Buttons;
