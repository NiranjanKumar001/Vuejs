<template>
    <div>
        {{ message }}
    </div>
    <contact-us></contact-us>
    <button-counter></button-counter>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
const message = "hello vue";
</script>

<style></style>