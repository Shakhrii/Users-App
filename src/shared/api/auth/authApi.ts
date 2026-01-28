import { delayFn } from '@shared/lib/utils';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export const loginApi = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  await delayFn(2000);

  return new Promise((resolve, reject) => {
    const { username, password } = credentials;

    if (username === 'admin' && password === 'admin') {
      resolve({
        token: 'admin-token',
      });
    } else if (!username || !password) {
      reject(new Error('Please fill all fields'));
    } else if (username !== 'admin') {
      reject(new Error('Incorrect login'));
    } else {
      reject(new Error('Incorrect password'));
    }
  });
};
