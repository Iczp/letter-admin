import type { App } from 'vue';
import axiosRetry from 'axios-retry';
import { AxiosError, AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { client } from './client';
import { ElMessage } from 'element-plus';
import { useUserStore } from './store/modules/user';

export const configClient = (app: App<Element>) => {
  // https://github.com/softonic/axios-retry
  // axiosRetry(client.instance, { retries: 1 });

  client.setConfig({
    baseURL: import.meta.env.VITE_API_BASE_PATH
  });
  client.instance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    console.log('requestConfig', config);
    const userStore = useUserStore();
    console.log('requestConfig userStore', userStore.getToken);
    config.headers['Authorization'] = userStore.getToken || '';
    return config;
  });
  client.instance.interceptors.response.use(
    (axiosResponse) => {
      console.log('axiosResponse', axiosResponse);
      const { status, data } = axiosResponse;
      if (status >= 200 && status < 300) {
        return axiosResponse;
      }
      throw new Error(`[${status}]:${data?.message || data}`);
    },
    (error: AxiosError) => {
      const { status } = error;
      console.error('err:', status, error);

      const data = error.response?.data as any;
      const message = data?.message || error.message || `未知错误`;

      ElMessage.error(`[${status}]:${message}`);
      return Promise.reject(error);
    }
  );

  console.log('configClient', client.getConfig());
};
