import type { App } from 'vue';
import { OpenAPI } from './apis';
import axiosRetry from 'axios-retry';
import axios, { InternalAxiosRequestConfig } from 'axios';

const getToken = async (args: any) => {
  // Some code that requests a token...
  const { url } = args;
  console.warn('getToken', url, args);

  return 'SOME_TOKEN';
};

export const configOpenAPI = (app: App<Element>) => {
  // https://github.com/softonic/axios-retry
  axiosRetry(axios, { retries: 3 });

  axios.interceptors.request.use((requestConfig: InternalAxiosRequestConfig<any>) => {
    console.log('requestConfig', requestConfig);
    return requestConfig;
  });
  axios.interceptors.response.use((axiosResponse) => {
    console.log('axiosResponse', axiosResponse);
    return axiosResponse;
  });

  OpenAPI.BASE = import.meta.env.VITE_API_BASE_PATH;

  OpenAPI.TOKEN = getToken;
};
