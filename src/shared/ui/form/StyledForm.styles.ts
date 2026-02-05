import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-input,
  .ant-input-affix-wrapper {
    width: 400px;
  }

  .ant-form {
    width: 400px;
    display: flex;
    flex-direction: column;
  }
`;
