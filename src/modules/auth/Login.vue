<template>
    <Hero title="Login" desc="Prepare for your best experience in puzzles" />

    <div class="grid grid-cols-10 gap-4 bg-gray-300">
        <div class="col-start-3 col-span-6">
            <form @submit.prevent="login">
                <Input label="Email" ph="example@email.com" v-model="email" />
                <Input
                    type="password"
                    label="Password"
                    ph="Password..."
                    v-model="password"
                />
                <Btn name="Login" />
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';
import Btn from '@/components/SubmitBtn.vue';
import Hero from '@/components/Hero.vue';

export default defineComponent({
    components: {
        Input,
        Btn,
        Hero,
    },
    methods: {
        login() {
            console.log(this.email);
            console.log(this.password);
            this.email = '';
            this.password = '';
        },
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
});
</script>
