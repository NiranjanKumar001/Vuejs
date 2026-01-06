import { createApp } from 'vue'
import App from './App.vue'
import Contactus from './components/contactus.vue';
import ButtonCounter from './components/ButtonCounter.vue';


const app= createApp(App);

app.component('contact-us',Contactus);

app.component('button-counter', ButtonCounter);

app.mount('#app') 
