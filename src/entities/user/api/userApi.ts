import { axiosInstance } from '@shared/api/client';
import { User } from '../model/types';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>('/users');
  return data;
};
