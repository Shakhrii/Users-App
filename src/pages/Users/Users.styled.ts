import { Button } from 'antd';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
`;

export const Container = styled.div`
  flex: 1;
  padding-bottom: 50px;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  position: sticky;
  bottom: 30px;
  align-self: start;
`;
