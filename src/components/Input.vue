<template>
    <label
        class="form-label inline-block mb-2 text-gray-700 float-left ml-1 mt-3 font-sans text-xl"
        >{{ label }}</label
    >
    <input
        :type="type"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        :placeholder="ph"
        :value="modelValue"
        @input="updateValue"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        modelValue: String,
        ph: String,
        label: String,
        type: {
            type: String,
            default: 'text',
        },
    },
    methods: {
        updateValue(event: Event) {
            this.$emit(
                'update:modelValue',
                (event.target as HTMLInputElement).value,
            );
        },
    },
});
</script>
