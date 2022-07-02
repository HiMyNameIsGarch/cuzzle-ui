import { IState } from '@/state';
import { ActionContext } from 'vuex';
import { IAuthState } from './state';

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
    createToken(
        context: ActionContext<IAuthState, IState>,
        data: IAuthRequest,
    ): Promise<any>;

    refreshToken(context: ActionContext<IAuthState, IState>): Promise<any>;

    logOut(context: ActionContext<IAuthState, IState>): Promise<any>;

    logIn(context: ActionContext<IAuthState, IState>, user: string): void;
}

export const AuthActions: IAuthActions = {
    async createToken({ commit }, data: IAuthRequest) {
        console.log('I created the token');
        commit('SET_ACCESS_TOKEN', 'nigga');
        console.log('data', data);
    },
    async refreshToken({ commit, state: { refreshToken } }) {
        console.log('I refreshed the token');
    },
    async logIn({ commit }, user: string) {
        console.log('I logged in');
        return 'sd';
    },
    async logOut({ commit }) {
        console.log('I logged out');
    },
};
