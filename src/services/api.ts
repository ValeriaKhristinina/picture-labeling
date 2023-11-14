import { getUrlWithGlobalParams } from '@/utils'

export const baseUrl = import.meta.env.VITE_API_URL
export const apiUrl = getUrlWithGlobalParams(baseUrl)

export const getPicturesData = async (params?: { filter?: string; page?: string }) => {
  let queryParams = {}
  if (params) {
    queryParams = { ...params }
  }
  const response = await fetch(getUrlWithGlobalParams(baseUrl, queryParams))

  return await response.json()
}

export const changePictureLabel = async (id: string, label: string) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      [id]: label
    })
  })
  return await res.json()
}
