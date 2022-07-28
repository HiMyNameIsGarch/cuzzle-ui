<template>
    <div class="home">
        <div class="bg-blue-500 h-80 flex align-middle justify-center">
            <h1 class="text-6xl font-bold">Welcome to back:</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/index';
const store = useAuthStore();
const { puzzles } = store;
const data = await puzzles();
console.log('authorized data: ', data);
</script>
