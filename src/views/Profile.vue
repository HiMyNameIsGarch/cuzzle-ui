<template>
    <div class="home">
        <div class="bg-blue-500 h-80 flex align-middle justify-center">
            <h1 class="text-6xl font-bold">Profile page</h1>
        </div>
    </div>
</template>

<script async setup lang="ts">
import { useProfileStore } from '@/stores/profile/index';

const store = useProfileStore();
const profile = await store.getProfile();
console.log('profile data: ', profile);
</script>
