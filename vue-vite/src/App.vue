<template>
    <div>
        {{ message }}
    </div>
    <Contact name="John Doe" phone="123-456-7890"></Contact>
</template>

<script setup>
import Contact from './components/Contact.vue';
import ButtonCounter from './components/ButtonCounter.vue';
const message = "hello vue";
</script>

<style></style>