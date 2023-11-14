<script setup lang="ts">
import { ref } from 'vue'
import ButtonContainer from './ButtonContainer.vue'
import { usePictures } from '@/store/usePictures'

const { setFilter } = usePictures()

const filterInput = ref('')

const onSubmit = async (e: Event) => {
  e.preventDefault()
  setFilter(filterInput.value)
}
</script>
<template>
  <div class="filter-form-wrapper">
    <form @submit="onSubmit" class="filter-form">
      <label for="filter-input">Filter by:</label>
      <input v-model="filterInput" id="filter-input" class="filter-input" type="text" />
      <ButtonContainer data-cy="filter">Submit</ButtonContainer>
    </form>
  </div>
</template>

<style scoped>
.filter-form-wrapper {
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 24px;
}

.filter-form {
  display: flex;
  justify-content: end;
  width: 100%;
}

.filter-form label {
  margin-right: 8px;
}

.filter-input {
  width: 18%;
  margin-right: 8px;
}
</style>
