<script setup lang="ts">
import ButtonContainer from './ButtonContainer.vue'
import { usePictures } from '@/store/usePictures'

const {
  page,
  pageTotal,
  getNextPage,
  getPreviousPage,
  isNextPageDisabled,
  isPreviousPageDisabled
} = usePictures()
</script>

<template>
  <section class="pagination">
    <ButtonContainer @click="getPreviousPage" :disabled="isPreviousPageDisabled"
      >Previous page</ButtonContainer
    >
    <section class="pages">
      <p>Page {{ page + 1 }} of {{ pageTotal }}</p>
    </section>
    <ButtonContainer @click="getNextPage" :disabled="isNextPageDisabled">Next page</ButtonContainer>
  </section>
</template>

<style>
.pagination {
  display: flex;
  justify-content: space-between;
}
.pages {
  display: flex;
}
.page {
  padding: 4px 10px;
  margin-right: 4px;
  background-color: lightgray;
  cursor: pointer;
}
.disabled {
  background-color: red;
}
</style>
