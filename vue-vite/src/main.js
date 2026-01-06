import { createApp } from 'vue'
import App from './App.vue'
import ButtonCounter from './components/ButtonCounter.vue';


const app= createApp(App);


app.component('button-counter', ButtonCounter);

app.mount('#app') 
