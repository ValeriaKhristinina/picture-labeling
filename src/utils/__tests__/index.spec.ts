import { describe, it, expect } from 'vitest'
import { getUrlWithGlobalParams } from '../index'

const globalParams = 'key=17eaca20-328b-42d5-848c-65fe60985860&id=lera'

describe('getUrlWithGlobalParams', () => {
  it('reutrn url with global params', () => {
    expect(getUrlWithGlobalParams('/a/b')).toBe(`/a/b?${globalParams}`)
  })

  it('reutrn url with global params', () => {
    expect(
      getUrlWithGlobalParams('/a/b', {
        filter: '123'
      })
    ).toBe(`/a/b?${globalParams}&filter=123`)
  })
})
