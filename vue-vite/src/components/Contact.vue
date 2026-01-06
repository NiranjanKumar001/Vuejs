<template>
    <div class="contact-container">
        <h2>Get in Touch</h2>
        
        <div v-if="!submitted">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label>Name *</label>
                    <input type="text" v-model="name" placeholder="Your name" :class="{error: errors.name}" @blur="checkName" />
                    <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
                </div>
                
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" v-model="email" placeholder="your.email@example.com" :class="{error: errors.email}" @blur="checkEmail" />
                    <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                </div>
                
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" v-model="phone" placeholder="Your phone number (optional)" />
                </div>
                
                <div class="form-group">
                    <label>Message *</label>
                    <textarea v-model="message" placeholder="What's on your mind?" :class="{error: errors.message}" @blur="checkMessage"></textarea>
                    <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
                </div>
                
                <button type="submit" :disabled="!canSubmit" class="submit-btn">
                    {{ isLoading ? 'Sending...' : 'Send Message' }}
                </button>
            </form>
        </div>
        
        <div v-else class="success-message">
            <h3>Thanks!</h3>
            <p>Got your message, {{ name }}. I'll get back to you soon!</p>
            <button @click="resetForm" class="reset-btn">Send another message</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Basic form data
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const submitted = ref(false);
const isLoading = ref(false);

// Simple error tracking
const errors = ref({
    name: '',
    email: '',
    message: ''
});

// Basic validation functions
function checkName() {
    if (!name.value.trim()) {
        errors.value.name = 'Please enter your name';
    } else {
        errors.value.name = '';
    }
}

function checkEmail() {
    if (!email.value.trim()) {
        errors.value.email = 'Email is required';
    } else if (!email.value.includes('@')) {
        errors.value.email = 'Please enter a valid email';
    } else {
        errors.value.email = '';
    }
}

function checkMessage() {
    if (!message.value.trim()) {
        errors.value.message = 'Please write a message';
    } else {
        errors.value.message = '';
    }
}

// Check if form can be submitted
const canSubmit = computed(() => {
    return name.value.trim() && 
           email.value.trim() && 
           email.value.includes('@') && 
           message.value.trim() &&
           !isLoading.value;
});

// Handle form submission
async function submitForm() {
    // Quick validation check
    checkName();
    checkEmail();
    checkMessage();
    
    if (!canSubmit.value) {
        return;
    }
    
    isLoading.value = true;
    
    // Simulate sending message (replace with real API call)
    setTimeout(() => {
        isLoading.value = false;
        submitted.value = true;
    }, 1500);
}

// Reset form to send another message
function resetForm() {
    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
    submitted.value = false;
    errors.value = { name: '', email: '', message: '' };
}
</script>


<style scoped>
.contact-container {
    max-width: 450px;
    margin: 30px auto;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}


h2 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}


.form-group {
    margin-bottom: 20px;
}


label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #555;
}


input, textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    transition: border-color 0.2s;
}


input:focus, textarea:focus {
    outline: none;
    border-color: #007bff;
}


input.error, textarea.error {
    border-color: #dc3545;
}


textarea {
    height: 80px;
    resize: vertical;
}

.error-msg {
    color: #dc3545;
    font-size: 12px;
    margin-top: 3px;
    display: block;
}

.submit-btn {
    background: #007bff;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
}

.submit-btn:hover {
    background: #0056b3;
}

.submit-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.success-message {
    text-align: center;
    padding: 20px;
}

.success-message h3 {
    color: #28a745;
    margin-bottom: 10px;
}

.reset-btn {
    background: #6c757d;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
}

.reset-btn:hover {
    background: #545b62;
}
</style>