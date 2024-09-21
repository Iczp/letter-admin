import { request } from '@/axios';
import { LoginDto, LoginInput } from './types';

export class AuthService {
  static login(input: LoginInput) {
    return request({
      // baseURL: 'http://localhost:3005',
      method: 'post',
      url: '/api/auth/login',
      data: input
    }) as Promise<LoginDto>;
  }
}
