<template>
    <div class="grid grid-cols-10 gap-4 bg-gray-400">
        <div class="col-start-3 col-span-4">
            <h1 class="text-left text-4xl font-bold mt-6 mb-1">{{ title }}</h1>
            <h1 class="text-left text-xl font-bold mb-6">
                {{ desc }}
            </h1>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: String,
        desc: String,
    },
});
</script>
