import styled from 'styled-components';
import CanvasFeature from './CanvasFeature';

const Canvas = styled(CanvasFeature)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('/assets/images/temp-bg.jpeg') center 90% fixed no-repeat;
    background-size: cover;
  }
`;

export default Canvas;
