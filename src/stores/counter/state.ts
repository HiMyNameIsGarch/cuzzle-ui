import { defineStore } from 'pinia';

export interface ICounterState {
    count: number;
}

export const useState = defineStore({
    id: 'counter.state',

    state: (): ICounterState => {
        return {
            count: 7,
        };
    },
});
