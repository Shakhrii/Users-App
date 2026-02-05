import { ReactNode } from 'react';
import * as S from './ButtonModal.styled';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const ButtonModal = ({ children, onClick, disabled }: Props) => {
  return (
    <S.ButtonModal onClick={onClick} disabled={disabled}>
      {children}
    </S.ButtonModal>
  );
};
