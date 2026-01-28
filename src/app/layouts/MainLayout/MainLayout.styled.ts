import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
