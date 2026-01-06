<template>
    <div style="max-width: 400px; margin: 40px auto; background: #f9f9f9; padding: 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
        <h2 style="text-align: center; margin-bottom: 24px;">Contact Us</h2>
        <form @submit.prevent="handleSubmit">
            <ContactInput label="Name" v-model="name" />
            <ContactInput label="Email" type="email" v-model="email" />
            <ContactInput label="Phone" type="tel" v-model="phone" />
            <ContactInput label="Message" v-model="message" />
            <div style="text-align: center; margin-top: 20px;">
                <ContactButton @click="handleSubmit">Send</ContactButton>
            </div>
        </form>
        <div v-if="submitted" style="margin-top: 24px; color: green; text-align: center; font-weight: bold;">Thank you for contacting us!</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ContactInput from "./ContactInput.vue";
import ContactButton from "./ContactButton.vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const submitted = ref(false);

function handleSubmit() {
    submitted.value = true;
    // Here you could send the data to a server or handle it as needed
}
</script>
