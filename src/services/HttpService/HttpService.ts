import axios, { AxiosInstance } from 'axios';
import { Pinia } from 'pinia';
import { Router } from 'vue-router';

export interface IHttpService extends AxiosInstance {
    store?: Pinia;
    router?: Router;
}

export let HttpService: IHttpService = axios.create();

const apiUrl = 'https://localhost:7120/api';

export const initHttpService = (store?: Pinia, router?: Router) => {
    HttpService = axios.create({
        baseURL: apiUrl,
    });
    HttpService.store = store;
    HttpService.router = router;
};
