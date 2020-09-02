import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
import api from './Api'

jest.mock('axios')

console.log(api.fetchMovies)

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = [
      {
        id: 'cool99',
        imageURL: 'https://google.com/images.jpg',
        title: 'Matrix',
        summary: 'lorem ipsum',
        rating: 6.7
      },
      {
        id: 'daddy78',
        imageURL: 'https://google.com/imagesDaddy.jpg',
        title: 'Avatar',
        summary: 'cool movie',
        rating: 9.9
      }
    ]

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data))

    await expect(api.fetchMovies()).resolves.toEqual(data)
  })

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error'

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))

    await expect(api.fetchMovies()).rejects.toThrow(errorMessage)
  })
})
