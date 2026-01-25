import { useState } from 'react';
import { loginApi, type LoginCredentials, type AuthResponse } from '@shared/api';

interface UseLoginReturn {
  login: (credentials: LoginCredentials) => Promise<AuthResponse | null>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

export const useLogin = (): UseLoginReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginApi(credentials);
      setLoading(false);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Internal error';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    login,
    loading,
    error,
    clearError,
  };
};
