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
