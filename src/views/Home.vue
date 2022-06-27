<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
        <h1 class="bg-green-500 text-3xl font-bold underline">
            {{ $store.state.counter.count }}
        </h1>
        <h2>This is your data from database: "{{ puzzle_name }}"</h2>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
@Options({
    data() {
        return {
            puzzle_name: String,
        };
    },
    components: {
        HelloWorld,
    },
    beforeCreate() {
        axios
            .get('https://localhost:7120/puzzle')
            .then((response) => {
                this.puzzle_name = response.data.name;
            })
            .catch((error) => console.log(error));
    },
})
export default class Home extends Vue {}
</script>
