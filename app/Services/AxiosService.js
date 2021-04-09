export const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 3000
})


export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 3000
})
export const imagesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 3000
})


export const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/davidparker/todos',
  timeout: 3000
})