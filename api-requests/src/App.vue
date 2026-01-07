<template>
  <div>
    Travelopedia
  </div>
  <hr />
  <table class="table table-striped table-light">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Days</th>
        <!-- <th scope="col">Fun Facts</th> -->
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="destination in destinationObj.destinationList" :key="destination.id">
        <td>{{ destination.name }}</td>
        <td>{{ destination.days }}</td>
        <!-- <td>{{ destination.funfacts }}</td> -->
        <td>{{ destination.price }}</td>
      </tr>
    </tbody>
  </table>
  <!-- <div v-for="destination in destinationObj.destinationList" :key="destination.id">
    <p>{{ destination.name }}</p>
    <p>{{ destination.days }}</p>
    <p>{{ destination.funfacts }}</p>
    <p>{{ destination.price }}</p>
    <hr/>
  </div> -->
</template>
<script setup>
import axios from 'axios';
import { reactive, onMounted } from 'vue';

const destinationObj = reactive({
  destinationList: [],
});

onMounted(async () => {

  // fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>{
  //   console.log(data);
  //   userObj.users=data;
  // });
  loaddestination();
})

function loaddestination() {

    axios.get('http://localhost:3000/destination')
      .then((response) => {
        console.log(response.data);
        destinationObj.destinationList = response.data;
      })
  }

</script>