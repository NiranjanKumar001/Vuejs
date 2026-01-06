<template>
    <button @click="count++"> clicked {{ count }} times</button>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>