import { IAuthState } from '@/stores/auth/state';
import axios, { AxiosInstance } from 'axios';
import { Router } from 'vue-router';
import { setupRequestInterceptor } from './setupRequestInterceptor';

export interface IHttpService extends AxiosInstance {
    auth?: IAuthState;
    router?: Router;
}

export let HttpService: IHttpService = axios.create();

const API_URL = 'https://localhost:7120/api';

const commonHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const initHttpService = (auth?: IAuthState, router?: Router) => {
    HttpService = axios.create({
        baseURL: API_URL,
    });
    HttpService.defaults.headers.common = commonHeaders;
    HttpService.auth = auth;
    HttpService.router = router;

    setupRequestInterceptor();
};
