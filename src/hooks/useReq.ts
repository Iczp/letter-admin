import { AxiosError, AxiosResponse } from 'axios';
import { reactive, ref } from 'vue';

export const useReq = async <T>(
  fn: () => Promise<
    | (AxiosResponse<T, any> & { error: undefined })
    | (AxiosError<unknown, any> & { data: undefined; error: unknown })
  >,
) => {
  const res = await fn();

  const status = ref(Number(res?.status));

  const isSuccess = ref(status.value >= 200 && status.value < 300);

  const data = ref(res.data);

  const error = reactive({
    ...(res.error as any),
  });

  return {
    status,
    isSuccess,
    data,
    error,
  };
};
