import type { App } from 'vue';
import axiosRetry from 'axios-retry';
import { InternalAxiosRequestConfig } from 'axios';
import { client } from './client';

const getToken = async (args: any) => {
  // Some code that requests a token...
  const { url } = args;
  console.warn('getToken', url, args);

  return 'SOME_TOKEN';
};

export const configClient = (app: App<Element>) => {
  // https://github.com/softonic/axios-retry
  axiosRetry(client.instance, { retries: 3 });

  client.setConfig({
    baseURL: import.meta.env.VITE_API_BASE_PATH
  });
  client.instance.interceptors.request.use((requestConfig: InternalAxiosRequestConfig<any>) => {
    console.log('requestConfig', requestConfig);
    return requestConfig;
  });
  client.instance.interceptors.response.use((axiosResponse) => {
    console.log('axiosResponse', axiosResponse);
    return axiosResponse;
  });

  console.log('configClient', client.getConfig());
};
