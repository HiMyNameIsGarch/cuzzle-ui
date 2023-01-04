import { extractStore } from '@/stores/extractStore';
import { defineStore } from 'pinia';
import { useActions } from './actions';
import { useGetters } from './getters';
import { useState } from './state';

export const useProfileStore = defineStore('profile', () => {
    return {
        ...extractStore(useState()),
        ...extractStore(useGetters()),
        ...extractStore(useActions()),
    };
});
