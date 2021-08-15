import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '600px',
  tablet: '1024px',
  laptop: '1440px',
  desktop: '1920px'
};

const theme: DefaultTheme = {
  mainColor: '#fff',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export default theme;
