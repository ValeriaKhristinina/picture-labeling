<script setup lang="ts">
import { ref, computed } from 'vue'
import ButtonContainer from './ButtonContainer.vue'
import { changePictureLabel } from '@/services/api'
import { getUrlWithGlobalParams } from '@/utils'
const props = defineProps<{
  photoId: string
  label: string
}>()
const isShow = ref(false)
const inputLabel = ref(props.label)
const labelText = ref(props.label)

const showForm = () => (isShow.value = true)

const closeForm = () => (isShow.value = false)

const onSubmit = async (e: Event) => {
  e.preventDefault()
  try {
    await changePictureLabel(props.photoId, inputLabel.value)
    isShow.value = false
    labelText.value = inputLabel.value
  } catch (error) {
    alert(error)
  }
}

const imageUrl = computed(() =>
  getUrlWithGlobalParams(
    import.meta.env.VITE_PHOTO_URL +
      props.photoId +
      '.jpg'
  )
)
</script>

<template>
  <section class="picture-card">
    <!-- <Button v-if="!isShow && !label" @click="addLabel">Add Label</Button> -->
    <div class="label-container">
      <form @submit="onSubmit" v-if="isShow" class="picture-form">
        <ButtonContainer type="button" @click="closeForm" variant="secondary"
          >Close</ButtonContainer
        >
        <input v-model="inputLabel" type="text" placeholder="Type label here..." />
        <ButtonContainer type="submit">Submit</ButtonContainer>
      </form>

      <p @click="showForm" class="image-label" v-if="!isShow && label">
        {{ labelText }}
      </p>
    </div>
    <div class="image-wrapper">
      <img :src="imageUrl" alt="" />
    </div>
  </section>
</template>

<style scoped>
.picture-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  padding: 24px 16px;
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  box-shadow: 0px 6px 8px 4px #dfe6e9;
  border-radius: 16px;
  min-height: 215px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 24px;
}
.image-wrapper img {
  width: inherit;
}

.picture-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
}

.picture-form input {
  width: 100%;
  padding: 4px;
  margin: 0 16px;
}

.image-label {
  font-size: 18px;
  width: 100%;
  cursor: pointer;
}

.image-label:hover {
  background: #dfe6e9;
  border-radius: 4px;
}

.label-container {
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 8px;
}
</style>
