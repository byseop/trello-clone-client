import styled from 'styled-components';
import CardSetFeature from './CardSetFeature';

const CardSet = styled(CardSetFeature)`
  width: 272px;
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  white-space: normal;

  .title_wrap {
    display: flex;
    flex-flow: column;
    height: 40px;
    box-sizing: border-box;
    padding: 4px;
    textarea {
      display: block;
      height: 32px;
      resize: none;
      width: 100%;
      outline: none;
      background-color: #ebecf0;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border: 0;
      font-size: 16px;
      font-weight: 500;
      padding: 0 6px;
      line-height: 32px;
      transition: all 0.2s ease-out;

      &:focus {
        background-color: #fff;
        box-shadow: inset 0 0 0 2px #0079bf;
      }
    }
  }

  .card_list_wrap {
    display: flex;
    flex-flow: column;
    padding: 6px;
    gap: 6px;
  }
`;

export default CardSet;
