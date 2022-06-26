<template>
    <div>
        <h1>Counter</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <h1>Count: {{ count }}</h1>
    </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';

export default {
    metaInfo: {
        title: 'Counterrr',
    },
    methods: {
        ...mapActions('counter', ['increment', 'decrement']),
    },
    computed: {
        ...mapGetters('counter', [
            'count',
            'incrementPending',
            'decrementPending',
        ]),
    },
};
</script>

<style>
.counter {
    margin-top: 2rem;
    min-height: 500px;
}
</style>
