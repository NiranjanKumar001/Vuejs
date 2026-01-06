<template>
  <div style="margin-bottom: 20px;">
    <label :for="label" style="font-weight: bold;">{{ label }}</label>
    <input 
      :id="label" 
      :type="type" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      style="padding: 8px; width: 100%; border: 1px solid #ccc; border-radius: 4px;" 
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);
</script>