import { ReactNode } from 'react';
import * as S from './ButtonModal.styled';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const ButtonModal = ({ children, onClick, disabled, loading }: Props) => {
  return (
    <S.ButtonModal onClick={onClick} disabled={disabled} loading={loading}>
      {children}
    </S.ButtonModal>
  );
};
