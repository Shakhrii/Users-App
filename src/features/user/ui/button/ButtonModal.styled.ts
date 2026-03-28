import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonModal = styled(Button)`
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #fff;

  &:hover,
  &:focus {
    background-color: var(--hover-color);
    border-color: var(--hover-color);
    color: #fff;
  }

  &:disabled {
    background-color: var(--disabled-color);
    border-color: var(--disabled-color);
    color: rgba(0, 0, 0, 0.25);
  }
`;
