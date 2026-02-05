import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers, createUser, updateUser } from '../api/userApi';
import { User } from './types';

export const usersQueryKey = ['users'];

export const useUsersQuery = () => {
  return useQuery<User[]>({
    queryKey: usersQueryKey,
    queryFn: getUsers,
  });
};

export const useMutationCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: usersQueryKey });
    },
  });
};

export const useMutationUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: usersQueryKey });
    },
  });
};
