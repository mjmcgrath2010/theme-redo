import { css } from "styled-components";

const ButtonBase = css`
  border-radius: 100px;
`;

export default {
  base: ButtonBase,
  primary: css`
    ${ButtonBase}
    color: blue;
    background: ${({ theme }) => theme.pallet.primary.main};
  `,
  secondary: css``,
  danger: css``,
  disabled: css``,
  error: css``,
  success: css``,
  warning: css``
};
