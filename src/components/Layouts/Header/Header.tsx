import styled from 'styled-components';
import HeaderFeature from './HeaderFeature';

const Header = styled(HeaderFeature)`
  display: flex;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.32);
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 4px;
  box-sizing: border-box;

  .header_inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      display: flex;
      gap: 4px;
    }

    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 20px;
      letter-spacing: 0.2em;
      font-weight: 600;
    }
  }
`;

export default Header;
