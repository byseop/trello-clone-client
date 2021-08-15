import styled from 'styled-components';
import ButtonFeature from './ButtonFeature';

const Button = styled(ButtonFeature)`
  border-radius: 3px;
  border: 0;
  text-decoration: none;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: none;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  padding: 4px;
  white-space: nowrap;
  gap: 4px;
  font-size: 14px;
  transition: all 0.2s ease-out;

  &[type='button'] {
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default Button;
