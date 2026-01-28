import Footer from '@widgets/Footer';
import Header from '@widgets/Header';
import { Outlet } from 'react-router';
import * as S from './MainLayout.styled';

function MainLayout() {
  return (
    <S.LayoutWrapper>
      <Header />

      <S.Main>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Main>

      <Footer />
    </S.LayoutWrapper>
  );
}

export default MainLayout;
