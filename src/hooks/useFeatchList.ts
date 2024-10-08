import {
  ActivitiesControllerGetListData,
  ActivitiesControllerGetListResponse,
  activitiesGetList,
  ActivityDto,
  ActivityPagedResult,
} from '@/client';
import type { Config } from '@hey-api/client-axios';
import { AxiosError, AxiosResponse } from 'axios';
import { ref, watch } from 'vue';

type GetListInput = {
  keyword?: string;
  skip?: number;
  maxResultCount?: number;
  sort?: string;
};

export type PagedResult<T> = {
  input?: {
    [key: string]: unknown;
  };
  totalCount: number;
  items: Array<T>;
};

interface RequestOptions<T> {
  query?: T;
}

type UseFetchListArgs<
  TReq extends RequestOptions<TReq>,
  TDto extends AxiosResponse<PagedResult<TDto>>,
> = {
  service: (options: TReq) => Promise<AxiosResponse<PagedResult<TDto>>>;
  input?: TReq;
};
export const useFetchList = async <
  TReq extends RequestOptions<TReq>,
  TDto extends AxiosResponse<PagedResult<TDto>>,
>({
  service,
  input,
}: UseFetchListArgs<TReq, TDto>) => {
  const res = await service(input as any);
  const items = ref<TDto[]>([]);
  watch(
    () => items.value,
    () => {},
    {
      immediate: true,
      deep: true,
    },
  );
  return {
    items,
  };
};
