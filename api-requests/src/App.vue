<template>
  <div>
    Requesting API data using Axios
  </div>
  <hr/>
  <div v-for="user in userObj.users" :key="user.id">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <hr/>
  </div>
</template>
<script setup>
import axios from 'axios';
import { reactive,onMounted } from 'vue';

  const userObj=reactive({
    users:[]
  });

  onMounted(async()=>{

    // fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>{
    //   console.log(data);
    //   userObj.users=data;
    // });

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      console.log(response.data);
      userObj.users=response.data;
    })
  })
  
</script>