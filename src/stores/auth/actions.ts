import { defineStore } from 'pinia';
// import { useState } from './state';

export interface IAuthResponse {
    access_token: string;
    refresh_token: string;
}

export interface IAuthRequest {
    username: string;
    email: string;
    password: string;
}

export interface IAuthActions {
    createToken(data: IAuthRequest): Promise<any>;
    refreshToken(): Promise<any>;
    logOut(): Promise<any>;
    logIn(): Promise<any>;
}

export const useActions = defineStore('auth.actions', (): IAuthActions => {
    // const state = useState();

    async function createToken(data: IAuthRequest) {
        console.log('I created the token');
        console.log('data', data);
    }
    async function refreshToken() {
        console.log('I refreshed the token');
    }
    async function logIn() {
        console.log('I logged in');
    }
    async function logOut() {
        console.log('I logged out');
    }

    return {
        createToken,
        refreshToken,
        logIn,
        logOut,
    };
});
