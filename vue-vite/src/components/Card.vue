<template>
  <div class="card" :class="themeData.current.value + '-theme'">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
  title: String
});

const themeData = inject('theme');
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.light-theme {
  background: white;
  color: #333;
}

.dark-theme {
  background: #34495e;
  color: #ecf0f1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.card-header {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.dark-theme .card-header {
  background: #2c3e50;
  border-bottom: 1px solid #34495e;
}

.light-theme .card-header {
  background: #f5f5f5;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
}

.card-content {
  padding: 20px;
}
</style>