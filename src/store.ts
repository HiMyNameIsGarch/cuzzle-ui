import { Module, Store } from 'vuex';
import Vuex from 'vuex';
import { DefaultState, IState } from './state';
import merge from 'deepmerge';
import { CounterModule } from './modules/counter/module';
import { AuthModule } from './modules/auth/module';

const state: IState = DefaultState;

export const store: Store<IState> = new Vuex.Store({
    state,
});

export const registerModule = (
    moduleName: string,
    module: Module<any, any>,
) => {
    const moduleIsRegistered: boolean =
        (store as any)._modules.root._children[moduleName] !== undefined;
    const stateExists: boolean = store.state[moduleName] !== undefined;

    if (stateExists) {
        module.state = merge(module.state, store.state[moduleName], {
            clone: false,
            arrayMerge: /* istanbul ignore next */ (
                _target: any,
                source: any,
            ) => {
                return source;
            },
        });
    }

    if (!moduleIsRegistered) {
        store.registerModule(moduleName, module, { preserveState: false });
    }
};

// register modules
registerModule('counter', CounterModule);
registerModule('auth', AuthModule);
