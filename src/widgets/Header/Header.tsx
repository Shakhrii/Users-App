import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared/lib/hooks/useAuth';

import * as S from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
    navigate('/login');
  };

  return (
    <S.HeaderWrapper>
      <S.Title>Users App</S.Title>
      <Button type="primary" onClick={handleClick}>
        Выйти
      </Button>
    </S.HeaderWrapper>
  );
};

export default Header;
