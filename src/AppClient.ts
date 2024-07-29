import {
  AppClient as BaseAppClient,
  CancelablePromise,
  OpenAPIConfig,
  BaseHttpRequest,
} from '~/api';
import { ApiRequestOptions } from '~/api/core/ApiRequestOptions';
import { request as __request } from '~/api/core/request';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { queryClient } from '~/providers/ReactQueryProvider';
import { processEnv } from '~/config';

const getAuthToken = () => {
  const token = localStorage.getItem('access');
  return token || '';
};

const getRefreshToken = () => {
  const token = localStorage.getItem('refresh');
  return token;
};

const getAuthTokenResolvable = async () => {
  const token = getAuthToken();
  return token || '';
};

export class AxiosHttpRequestWithRetry extends BaseHttpRequest {
  private refreshableAxiosInstance = axios.create();
  private refresherAxiosInstance = axios.create();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private refreshAuthLogic = (failedRequest: any) => {
    const refreshUrl = this.config.BASE + '/jwt/refresh/';
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      return Promise.reject(failedRequest);
    }

    const result = this.refresherAxiosInstance
      .post(refreshUrl, {
        refresh: refreshToken,
      })
      .then((tokenRefreshResponse) => {
        localStorage.setItem('access', tokenRefreshResponse.data.access);
        failedRequest.response.config.headers['Authorization'] =
          'Bearer ' + tokenRefreshResponse.data.access;
        return Promise.resolve();
      })
      .catch(() => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');

        queryClient.invalidateQueries({ queryKey: ['user'] });

        return Promise.reject(failedRequest);
      });

    return result;
  };

  constructor(config: OpenAPIConfig) {
    super(config);

    // Interceptor to include auth token in headers
    this.refreshableAxiosInstance.interceptors.request.use(
      (request) => {
        const token = getAuthToken();
        if (token) {
          request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    createAuthRefreshInterceptor(
      this.refreshableAxiosInstance,
      this.refreshAuthLogic,
    );
  }

  public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return __request(this.config, options, this.refreshableAxiosInstance);
  }
}

const AppClient = new BaseAppClient(
  {
    BASE: processEnv.serverUrl,
    TOKEN: getAuthTokenResolvable,
  },
  AxiosHttpRequestWithRetry,
);

export default AppClient;
