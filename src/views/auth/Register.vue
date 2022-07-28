<template>
    <Hero
        title="Register"
        desc="Are you ready to enter in the most exiting community of puzzle solvers?"
    />

    <div class="grid grid-cols-10 gap-4 bg-gray-300">
        <div class="col-start-3 col-span-6">
            <form @submit.prevent="registerMe">
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
import { useRouter } from 'vue-router';
const router = useRouter();

const store = useAuthStore();
const { register } = store;

const username = ref('');
const email = ref('');
const password = ref('');

const registerMe = async () => {
    // validate data
    // send request
    const response = await register({
        username: username.value,
        email: email.value,
        password: password.value,
    });
    // show errors if any
    if (response) {
        username.value = '';
        email.value = '';
        password.value = '';
        router.push('/login');
    } else {
        console.error('cannot add user');
    }
};
</script>
