import { request } from '@/axios';
import { TokenDto, LoginInput } from './types';

export class AuthService {
  static async login(input: LoginInput) {
    const ret = (await request({
      method: 'post',
      url: '/api/auth/login',
      data: input,
    })) as TokenDto;
    ret.creation_time = new Date();
    return ret;
  }
}
