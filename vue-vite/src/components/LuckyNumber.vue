<template>
  <div class="lucky-number-section">
    <h3>Your Lucky Number</h3>
    <div class="number-display">
      <span class="lucky-number">{{ luckyNumber }}</span>
    </div>
    <button @click="generateNumber" class="generate-btn">
      Get New Number
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const luckyNumber = ref(Math.floor(Math.random() * 100) + 1);

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
  color: #333;
  margin-bottom: 15px;
}

.number-display {
  background: #007bff;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.lucky-number {
  font-size: 24px;
  font-weight: bold;
}

.generate-btn {
  background: #28a745;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.generate-btn:hover {
  background: #218838;
}
</style>