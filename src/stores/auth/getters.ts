import { defineStore } from 'pinia';
import { computed, ComputedRef } from 'vue';
import { useState } from './state';

export interface IAuthGetters {
    isAuthenticated: ComputedRef<boolean>;
    currentUser: ComputedRef<string>;
}

export const useGetters = defineStore('auth.getters', (): IAuthGetters => {
    const state = useState();

    const isAuthenticated = computed((): boolean => {
        return state.id != null;
    });

    const currentUser = computed((): string => {
        return state.id;
    });

    return {
        isAuthenticated,
        currentUser,
    };
});
