import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/userApi';
import { User } from './types';

export const usersQueryKey = ['users'];

export const useUsersQuery = () => {
  return useQuery<User[]>({
    queryKey: usersQueryKey,
    queryFn: getUsers,
  });
};
