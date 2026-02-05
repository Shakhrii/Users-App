import { axiosInstance } from '@shared/api/client';
import { User } from '../model/types';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>('/users');
  return data;
};

export const createUser = async (newUser: Omit<User, 'id | createdAt'>): Promise<User> => {
  const { data } = await axiosInstance.post<User>('/users', newUser);
  return data;
};

export const updateUser = async (
  id: string,
  editedUser: Omit<User, 'id | createdAt'>,
): Promise<User> => {
  const { data } = await axiosInstance.put<User>(`/users/${id}`, editedUser);
  return data;
};
