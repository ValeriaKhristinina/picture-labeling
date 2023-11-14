<script setup lang="ts">
defineProps<{
  variant?: string
}>()
</script>

<template>
  <button class="btn" :class="{ secondary: variant === 'secondary' }"><slot></slot></button>
</template>

<style scoped>
.btn {
  background-color: #dfe6e9;
  border: 1px solid #dfe6e9;
  height: fit-content;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #fff;
  border: 1px solid #dfe6e9;
}

.secondary {
  background-color: #e17055;
}
</style>
