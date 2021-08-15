import styled from 'styled-components';
import BoardFeature from './BoardFeature';

const Board = styled(BoardFeature)`
  flex: 1;
  padding: 48px 6px 6px 6px;
  position: relative;

  .contents {
    position: absolute;
    left: 6px;
    top: 110px;
  }

  .card_sets_wrap {
    display: flex;
    align-items: start;
    gap: 6px;
  }
`;

export default Board;
