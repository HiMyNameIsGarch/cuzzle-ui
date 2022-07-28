<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script lang="ts">
import { HttpService } from '@/services/HttpService/HttpService';
export default {
    async created() {
        var { data } = await HttpService.get<any>('/puzzle');
        console.log('data', data);
    },
};
</script>
