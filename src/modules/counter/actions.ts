import { ActionContext } from 'vuex';
import { ICounterState } from './state';
import { IState } from '@/state';

export interface ICounterResponse {
    count: number;
}

export interface ICounterActions {
    increment(context: ActionContext<ICounterState, IState>): Promise<any>;

    decrement(context: ActionContext<ICounterState, IState>): Promise<any>;
}

export const CounterActions: ICounterActions = {
    async increment({ commit, state }: ActionContext<ICounterState, IState>) {
        commit('SET_INCREMENT_PENDING', true);
        state.count++;
    },
    async decrement({ commit, state }: ActionContext<ICounterState, IState>) {
        commit('SET_DECREMENT_PENDING', true);
        state.count--;
    },
};
