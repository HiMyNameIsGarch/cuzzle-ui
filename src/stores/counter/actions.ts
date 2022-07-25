import { defineStore } from 'pinia';
import { useState } from './state';

export interface ICounterActions {
    increment(amount: number): void;
    decrement(amount: number): void;
}

export const useActions = defineStore(
    'counter.actions',
    (): ICounterActions => {
        const state = useState();

        function increment(amount = 1): void {
            state.count += amount;
        }

        function decrement(amount = 1): void {
            state.count -= amount;
        }

        return {
            increment,
            decrement,
        };
    },
);
