<template>
    <Hero
        title="Login"
        desc="Prepare for your best experience in solving all kinds of puzzles"
    />

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

<script setup lang="ts">
import Input from '@/components/Input.vue';
import Btn from '@/components/SubmitBtn.vue';
import Hero from '@/components/Hero.vue';
import { useAuthStore } from '@/stores/auth/index';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuthStore();
const { logIn } = store;

const email = ref('');
const password = ref('');

const clearData = () => {
    email.value = '';
    password.value = '';
};

const login = async () => {
    const tokens = await logIn({
        email: email.value,
        password: password.value,
    });
    clearData();
    console.log('tokens: ', tokens);
    router.push('/profile');
};
</script>
