<script setup lang="ts">
import PicturesList from './components/PicturesList.vue'
</script>

<template>
  <header>
    <div class="container">
      <h1 class="page-title">Picture labeling application</h1>
    </div>
  </header>

  <main>
    <div class="container">
      <PicturesList />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 16px;
}
</style>
