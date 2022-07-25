import { extractStore } from '@/stores/extractStore';
import { defineStore } from 'pinia';
import { useActions } from './actions';
import { useGetters } from './getters';
import { useState } from './state';

export const useCounterStore = defineStore('counter', () => {
    return {
        ...extractStore(useState()),
        ...extractStore(useGetters()),
        ...extractStore(useActions()),
    };
});
