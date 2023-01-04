import { HttpService } from '../HttpService/HttpService';
import { IProfileModel } from './models';

export interface IProfileService {
    getProfile(): Promise<IProfileModel>;
}
export const ProfileService: IProfileService = {
    async getProfile() {
        const data = await HttpService.get('/profile');
        return data.data;
    },
};
