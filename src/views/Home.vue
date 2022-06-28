<template>
    <div class="home">
        <!-- <h1 class="bg-blue-500 text-3xl font-bold underline"> -->
        <!--     {{ $store.state.counter.count }} -->
        <!-- </h1> -->
        <div class="bg-blue-500 h-80 flex align-middle justify-center">
            <h1 class="text-6xl font-bold">Welcome to Cuzzle</h1>
        </div>
    </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { defineComponent } from 'vue';

export default defineComponent({
    components: {},
});
</script>
