import BaseButton from '@shared/ui/button/Button.styled';
import Alert from 'antd/es/alert/Alert';
import { memo } from 'react';
import styled from 'styled-components';

export const StyledButton = styled(BaseButton)`
  display: flex;
  margin-left: auto;
`;

export const Container = styled.div``;

const TitleBase = styled.h1`
  font-size: clamp(40px, 14.167vw, 170px);
  font-weight: bold;
  font-family: 'Dancing Script';
  align-self: flex-start;
  padding: 0;
  margin: 20px 0 0 0;
  text-align: center;
  height: 100%;
`;

export const StyledTitle = memo(TitleBase);

export const StyledSubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  align-self: flex-start;
  color: var(--accent-color);
  margin-bottom: 30px;
`;

export const AlertWrapper = styled.div`
  min-height: 56px;
  margin-top: 20px;
`;

export const StyledAlert = styled(Alert)`
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: white;
`;
