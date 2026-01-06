<template>
  <div class="lucky-number-section">
    <h3>{{ userData.name ? `${userData.name}'s` : 'Your' }} Lucky Number</h3>
    <div class="number-display" :class="themeData.current.value + '-theme'">
      <span class="lucky-number">{{ luckyNumber }}</span>
    </div>
    <button @click="generateNumber" class="generate-btn" :class="themeData.current.value + '-theme'">
      Get New Number
    </button>
    <p v-if="userData.name" class="user-info">
      Hello {{ userData.name }}!
    </p>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const luckyNumber = ref(Math.floor(Math.random() * 100) + 1);
const themeData = inject('theme');
const userData = inject('userData');

function generateNumber() {
  luckyNumber.value = Math.floor(Math.random() * 100) + 1;
}
</script>

<style scoped>
.lucky-number-section {
  text-align: center;
  padding: 20px;
}

h3 {
  margin-bottom: 15px;
}

.number-display {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  transition: all 0.3s ease;
}

.number-display.light-theme {
  background: #007bff;
  color: white;
}

.number-display.dark-theme {
  background: #e74c3c;
  color: white;
}

.lucky-number {
  font-size: 24px;
  font-weight: bold;
}

.generate-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.generate-btn.light-theme {
  background: #28a745;
  color: white;
}

.generate-btn.dark-theme {
  background: #f39c12;
  color: white;
}

.generate-btn:hover {
  opacity: 0.8;
}

.user-info {
  margin-top: 10px;
  font-style: italic;
  color: #666;
}
</style>