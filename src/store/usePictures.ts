import { getPicturesData } from '@/services/api'
import { computed, ref, watch } from 'vue'

const pictures = ref({})
const filter = ref('')
const page = ref(0)
const pageTotal = ref(0)

const fetchPictures = async () => {
  const queryParams: { filter?: string; page?: string } = {}
  if (filter.value) {
    queryParams.filter = filter.value
  }

  if (page.value) {
    queryParams.page = page.value.toString()
  }

  const response = await getPicturesData(queryParams)
  setPictures(response.results)
  setPage(Number(response.page))
  setPageTotal(Number(response.num_pages))
}

watch([filter], () => {
  page.value = 0
  fetchPictures()
})

watch([page], () => {
  fetchPictures()
})

const setPictures = (newPictures: Record<string, string>) => {
  pictures.value = newPictures
}

const setFilter = (newFilter: string) => {
  filter.value = newFilter
}

const setPage = (newPage: number) => {
  page.value = newPage
}
const setPageTotal = (newPageTotal: number) => {
  pageTotal.value = newPageTotal
}

export const usePictures = () => {
  const isNextPageDisabled = computed(() => {
    return page.value === pageTotal.value - 1
  })
  const isPreviousPageDisabled = computed(() => {
    return page.value === 0
  })

  const getNextPage = () => {
    page.value += 1
  }

  const getPreviousPage = () => {
    page.value -= 1
  }

  return {
    pictures,
    filter,
    page,
    pageTotal,
    isNextPageDisabled,
    isPreviousPageDisabled,
    fetchPictures,
    setFilter,
    setPage,
    getNextPage,
    getPreviousPage
  }
}
