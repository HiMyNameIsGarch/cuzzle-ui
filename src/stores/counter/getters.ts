import { defineStore } from 'pinia';
import { computed, ComputedRef } from 'vue';
import { useState } from './state';

export interface ICounterGetters {
    count: ComputedRef<number>;
    doubleCount: ComputedRef<number>;
}

export const useGetters = defineStore(
    'counter.getters',
    (): ICounterGetters => {
        const state = useState();

        const count = computed((): number => {
            return state.count;
        });

        const doubleCount = computed((): number => {
            return state.count * 2;
        });

        return {
            count,
            doubleCount,
        };
    },
);
