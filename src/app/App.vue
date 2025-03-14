<template>
    <!-- Navbar -->
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div
                    class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="flex-shrink-0 flex items-center">
                        <h1 class="text-white bg-blend-color">Logo here</h1>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <router-link
                            v-for="link in links"
                            v-bind:key="link.href"
                            exact-active-class="bg-gray-900"
                            v-bind:to="link.href"
                            class="text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >{{ link.name }}</router-link
                        >
                    </div>
                </div>
                <div
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                >
                    <div v-if="!isAuthenticated">
                        <button
                            class="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        >
                            <router-link to="/register">Register</router-link>
                        </button>
                        <button
                            class="mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        >
                            <router-link to="/login">Login</router-link>
                        </button>
                    </div>
                    <!-- Logged in  -->
                    <button
                        v-else
                        type="button"
                        class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                    <div class="ml-3 relative" v-if="isAuthenticated">
                        <div>
                            <button
                                type="button"
                                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <router-link to="/profile">
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </router-link>
                            </button>
                        </div>

                        <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
                -->
                        <div
                            class="opacity-0 scale-0 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-0"
                                >Your Profile</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-1"
                                >Settings</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-2"
                                >Sign out</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main view -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-gray-200 text-center lg:text-left">
        <div
            class="text-gray-700 text-center p-4"
            style="background-color: rgba(0, 0, 0, 0.2)"
        >
            © 2021 Copyright Cuzzle
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/index';
import { storeToRefs } from 'pinia';
const { isAuthenticated } = storeToRefs(useAuthStore());

const links = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
];
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
