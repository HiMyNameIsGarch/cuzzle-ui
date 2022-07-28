import { HttpService } from './HttpService';
import { AxiosRequestConfig, AxiosError } from 'axios';

export function setupRequestInterceptor() {
    HttpService.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            const token: string = HttpService.auth?.accessToken || '';
            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
        },
        (error: AxiosError) => Promise.reject(error),
    );
}
