export interface IAuthRegister {
    username: string;
    email: string;
    password: string;
}

export interface IAuthResponse {
    token: string;
    refreshToken: string;
}

export interface IAuthLogin {
    email: string;
    password: string;
}

export interface IProfileModel {
    email: string;
    username: string;
    daysEntered: number;
}
