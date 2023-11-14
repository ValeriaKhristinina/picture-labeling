export const getUrlWithGlobalParams = (url: string, params?: Record<string, string>) => {
  const combinedParams = new URLSearchParams({
    key: import.meta.env.VITE_API_KEY,
    id: import.meta.env.VITE_API_ID,
    ...params
  })
  return url + '?' + combinedParams
}
