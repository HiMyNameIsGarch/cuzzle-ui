import { IAuthState } from './state';

export interface IAuthGetters {
    isAuthenticated(state: IAuthState): boolean;
    currentUser(state: IAuthState): string;
}

export const AuthGetters: IAuthGetters = {
    isAuthenticated(state: IAuthState): boolean {
        return true;
        // return state.id !== null && state.accessToken !== null;
    },
    currentUser(state: IAuthState): string {
        return state.id || '';
    },
};
