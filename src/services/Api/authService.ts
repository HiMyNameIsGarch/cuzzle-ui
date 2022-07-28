import { HttpService } from '../HttpService/HttpService';
import { IAuthLogin, IAuthRegister, IAuthResponse } from './models';

export interface IAuthService {
    register(user: IAuthRegister): Promise<boolean>;
    login(user: IAuthLogin): Promise<IAuthResponse>;
    refreshToken(oldTokens: IAuthResponse): Promise<IAuthResponse>;
    // logout(): Promise<void>;
}

export const AuthService: IAuthService = {
    async register(user: IAuthRegister) {
        const data = await HttpService.post('/auth/register', user);
        return data.data;
    },
    async login(user: IAuthLogin) {
        const data = await HttpService.post<IAuthResponse>('/auth/login', user);
        return data.data;
    },
    async refreshToken(oldTokens: IAuthResponse) {
        const data = await HttpService.post<IAuthResponse>(
            '/token/refresh',
            oldTokens,
        );
        return data.data;
    },
    // async logout() {},
};
