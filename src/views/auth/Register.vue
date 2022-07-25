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

<script setup lang="ts">
import Input from '@/components/Input.vue';
import Btn from '@/components/SubmitBtn.vue';
import Hero from '@/components/Hero.vue';
import { useAuthStore } from '@/stores/auth/index';
import { ref } from 'vue';

const store = useAuthStore();
const { createToken } = store;

const username = ref('');
const email = ref('');
const password = ref('');

const register = () => {
    console.log('call register user');
    createToken({
        username: username.value,
        email: email.value,
        password: password.value,
    });
};
</script>
