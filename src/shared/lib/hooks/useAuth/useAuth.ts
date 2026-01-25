import { useLocalStorage } from '../useLocalStorage';

interface UseAuthReturn {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const [token, setToken, removeToken] = useLocalStorage<string | null>('authToken', null);

  const isAuthenticated = !!token;

  const logout = () => {
    removeToken();
  };

  return {
    token,
    isAuthenticated,
    setToken,
    logout,
  };
};
