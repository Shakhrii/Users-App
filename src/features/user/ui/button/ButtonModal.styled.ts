import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonModal = styled(Button)`
  background-color: #1677ff;
  border-color: #1677ff;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #4096ff;
    border-color: #4096ff;
    color: #fff;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.25);
  }
`;
