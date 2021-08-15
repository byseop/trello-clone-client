import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;
  }

  /* @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin: 0 auto;
  } */
`;

export default GlobalStyle;
