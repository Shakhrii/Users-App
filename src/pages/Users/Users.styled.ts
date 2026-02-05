import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding-bottom: 50px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  position: sticky;
  bottom: 50px;
  align-self: start;
`;

export const ClickWrapper = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: goldenrod;
  }
`;
