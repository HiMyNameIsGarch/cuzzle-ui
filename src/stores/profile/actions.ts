import { defineStore } from 'pinia';
import { useState } from './state';
import { IProfileModel } from '@/services/Api/models';
import { HttpService } from '@/services/HttpService/HttpService';
import { ProfileService } from '@/services/Api/profileService';

export interface IProfileActions {
    getProfile(): Promise<IProfileModel>;
}

export const useActions = defineStore(
    'profile.actions',
    (): IProfileActions => {
        // const state = useState();

        async function getProfile() {
            const res = await ProfileService.getProfile();
            return res;
        }

        return {
            getProfile,
        };
    },
);
