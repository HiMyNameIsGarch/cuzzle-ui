import { IState } from '@/state';
import axios, { AxiosInstance } from 'axios';
import { Router } from 'vue-router';
import { Store } from 'vuex';

export interface IHttpService extends AxiosInstance {
    store?: Store<IState>;
    router?: Router;
}

export let HttpService: IHttpService = axios.create();

const apiUrl = 'https://localhost:7120/api';

export const initHttpService = (store?: Store<IState>, router?: Router) => {
    HttpService = axios.create({
        baseURL: apiUrl,
    });
    HttpService.store = store;
    HttpService.router = router;
};
