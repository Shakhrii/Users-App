import { axiosInstance } from '@shared/api/client';
import { User, UserClient } from '../model/types';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>('/users');
  return data;
};

export const createUser = async (newUser: UserClient): Promise<User> => {
  newUser.createdAt = new Date().toString();
  const { data } = await axiosInstance.post<User>('/users', newUser);
  return data;
};

export const updateUser = async (editedUser: User): Promise<User> => {
  const { data } = await axiosInstance.put<User>(`/users/${editedUser.id}`, editedUser);
  return data;
};

export const deleteUser = async (deletedUser: User) => {
  const { data } = await axiosInstance.delete<User>(`/users/${deletedUser.id}`);
  return data;
};
