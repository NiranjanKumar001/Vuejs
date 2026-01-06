<template>
  <button @click="$emit('click')" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 1rem;">
    <slot>Submit</slot>
  </button>
</template>

<script setup>
// No props needed for basic button
</script>
