<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <h2>Weather Forecast</h2>
    <div v-for="(forecast,index) in weatherForecast" :key="index">
        <p> Date: {{forecast.date}} </p>
        <p> Temp in C: {{forecast.tempC}} </p>
        <p> Temp in F: {{forecast.tempF}} </p>
        <p> Summnary: {{forecast.summary}} </p>
        <p> -------------------------------</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import { WeatherReport } from '@/views/weatherReport';

@Options({
  data() {
    return {
        weatherForecast: Array<WeatherReport>()
    }
  },
  components: {
    HelloWorld,
  },
  beforeCreate() {
    axios.get('https://localhost:7120/weatherforecast')
        .then(response => {
            this.weatherForecast = response.data
        })
        .catch(error => console.log(error))
  }
})
export default class Home extends Vue {}
</script>
