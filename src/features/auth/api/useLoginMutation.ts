import { AuthResponse, loginApi, LoginCredentials } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: loginApi,
  });
};
