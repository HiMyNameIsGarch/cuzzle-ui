<template>
    <div>
        <h1>Counter</h1>
        <button @click="increment(1)">Increment</button>
        <button @click="decrement(1)">Decrement</button>
        <h1>Count: {{ count }}</h1>
        <h1>Double count: {{ doubleCount }}</h1>
    </div>
</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter/index';
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const store = useCounterStore();
        const { count, doubleCount } = storeToRefs(store);
        const { increment, decrement } = store;
        return {
            count,
            doubleCount,
            increment,
            decrement,
        };
    },
};
</script>

<style>
.counter {
    margin-top: 2rem;
    min-height: 500px;
}
</style>
