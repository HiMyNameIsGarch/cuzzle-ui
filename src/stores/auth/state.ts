import { defineStore } from 'pinia';

export interface IAuthState {
    accessToken: string;
    refreshToken: string;
    id: string;
}

export const AuthDefaultState = (): IAuthState => {
    return {
        accessToken: '',
        refreshToken: '',
        id: '',
    };
};

export const useState = defineStore({
    id: 'auth.state',

    state: (): IAuthState => {
        return {
            ...AuthDefaultState(),
        };
    },
});
