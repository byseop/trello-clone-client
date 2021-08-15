import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin: 0 auto;
  } */
`;

export default GlobalStyle;
