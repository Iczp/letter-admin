import request from '@/axios';
import type { ActivityDto, ActivityGetLisInput } from './types';
import type { PagedResultDto } from '../dtos/PagedResultDto';

export class ActivityService {
  static getList(input?: ActivityGetLisInput) {
    return request.get<PagedResultDto<ActivityDto>>({
      url: '/api/activities',
      data: input
    });
  }
}
