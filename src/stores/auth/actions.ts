import { defineStore } from 'pinia';
import { useState } from './state';
import {
    IAuthLogin,
    IAuthRegister,
    IAuthResponse,
} from '@/services/Api/models';
import { AuthService } from '@/services/Api/authService';

export interface IAuthActions {
    register(data: IAuthRegister): Promise<boolean>;
    logIn(data: IAuthLogin): Promise<IAuthResponse>;
    logOut(): Promise<any>;
}

export const useActions = defineStore('auth.actions', (): IAuthActions => {
    const state = useState();

    async function register(data: IAuthRegister) {
        const res = await AuthService.register(data);
        return res;
    }
    async function logIn(data: IAuthLogin) {
        const tokens = await AuthService.login(data);
        state.accessToken = tokens.token;
        state.refreshToken = tokens.refreshToken;
        state.id = 'changemefrombackend';
        return tokens;
    }
    async function logOut() {
        state.accessToken = '';
        state.refreshToken = '';
        state.id = '';
    }

    return {
        register,
        logIn,
        logOut,
    };
});
