<script setup lang="ts">
import FilterForm from './FilterForm.vue'
import PictureCard from './PictureCard.vue'
import PaginationContainer from './PaginationContainer.vue'
import { usePictures } from '@/store/usePictures'

const { pictures, fetchPictures } = usePictures()

fetchPictures()
</script>

<template>
  <div>
    <FilterForm />
    <section class="cards">
      <PictureCard
        v-for="(label, photoId) in pictures"
        :key="photoId"
        :photoId="photoId"
        :label="label"
      />
    </section>
    <PaginationContainer />
  </div>
</template>

<style scope>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media only screen and (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
