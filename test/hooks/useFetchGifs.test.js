import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test Hook useFetchGifs', () => { 

  test('should return Initial state', () => { 


    const {result: {current: {gifs, isLoading}} } = renderHook(() => useFetchGifs('Pikachu'))
    expect(gifs.length).toBe(0)
    expect(isLoading).toBeTruthy()
   })

   test('should return array with gifs and isLoading in false', async () => { 
    const {result } = renderHook(() => useFetchGifs('Pikachu'))
    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    )
    const {gifs,isLoading} = result.current
    expect(gifs.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()

    })
 })