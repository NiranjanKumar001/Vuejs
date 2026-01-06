<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

.card-header {
  background: #f5f5f5;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.card-header h3 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.card-content {
  padding: 20px;
}
</style>