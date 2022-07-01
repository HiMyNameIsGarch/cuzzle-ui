<template>
    <button
        type="submit"
        class="inline-block float-left my-6 px-6 py-2.5 bg-green-500 text-white font-normal leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
    >
        {{ name }}
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        name: String,
    },
});
</script>
