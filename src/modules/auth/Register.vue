<template>
    <Hero
        title="Register"
        desc="Are you ready to enter in the most exiting community of puzzle solvers?"
    />

    <div class="grid grid-cols-10 gap-4 bg-gray-300">
        <div class="col-start-3 col-span-6">
            <form @submit.prevent="register">
                <Input label="Username" ph="Enigma Solver" v-model="username" />
                <Input label="Email" ph="example@email.com" v-model="email" />
                <Input
                    type="password"
                    label="Password"
                    ph="Password..."
                    v-model="password"
                />
                <Btn name="Register me!" />
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
        register() {
            console.log(this.username);
            console.log(this.email);
            console.log(this.password);
            this.email = '';
            this.password = '';
            this.username = '';
        },
    },
    data() {
        return {
            email: '',
            password: '',
            username: '',
        };
    },
});
</script>
