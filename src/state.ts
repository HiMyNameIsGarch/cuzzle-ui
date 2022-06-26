import { CounterDefaultState, ICounterState } from './modules/counter/state';

export interface IState {
    [key: string]: any;

    counter?: ICounterState;
}

export const DefaultState: IState = {
    counter: {
        ...CounterDefaultState(),
    },
};
