import { IAuthState } from './state';

export interface IAuthMutations {
    SET_ACCESS_TOKEN(state: IAuthState, accessToken: string): void;

    SET_REFRESH_TOKEN(state: IAuthState, refreshToken: string): void;

    SET_CURRENT_USER(state: IAuthState, user: string): void;
}

export const AuthMutations: IAuthMutations = {
    SET_ACCESS_TOKEN: (state, accessToken) => {
        state.accessToken = accessToken;
        console.log(state.accessToken);
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
        state.refreshToken = refreshToken;
    },
    SET_CURRENT_USER: (state, user) => {
        state.id = user;
    },
};
