import { Button, List } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding-bottom: 50px;
  height: 300px;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
  margin-top: 20px;
`;

export const StyledListItem = styled(List.Item.Meta)`
  .ant-list-item-meta-title,
  .ant-list-item-meta-description {
    color: white !important;
  }
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
