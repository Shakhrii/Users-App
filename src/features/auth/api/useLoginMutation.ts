import { AuthResponse, loginApi, LoginCredentials } from '@shared/api';
import { useAuth } from '@shared/lib/hooks';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
  const { setToken } = useAuth();
  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setToken(data.token);
    },
  });
};
