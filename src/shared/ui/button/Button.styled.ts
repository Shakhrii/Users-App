import styled from 'styled-components';
import { Button } from 'antd';

const BaseButton = styled(Button)`
  background-color: var(--accent-color);
  &:hover {
    background-color: var(--hover-color) !important;
  }

  &[disabled],
  &.ant-btn-disabled,
  .ant-btn[disabled] {
    background: var(--disabled-color) !important;
  }
`;

export default BaseButton;
