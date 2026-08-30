import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-input,
  .ant-input-affix-wrapper {
    width: 300px;
  }

  .ant-form {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .ant-form-item-explain-error {
    width: 300px;
  }
`;
