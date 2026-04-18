import { Button, List } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding-bottom: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StyledButton = styled(Button)`
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledListItem = styled(List.Item.Meta)`
  .ant-list-item-meta-title,
  .ant-list-item-meta-description {
    color: white !important;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
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
