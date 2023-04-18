

const request = (url: string, options?: RequestInit | undefined) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

type Methods = 'POST' | 'DELETE'
//utilizando literal types, auxiliando no autocomplete quando a function for chamada

type dataRow = {
  image: string;
  brandModel: string,
  year: number,
  plate: string,
  color: string
}

const createRequest = (method: Methods) =>  (url: string, data: dataRow) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = request
export const post = createRequest('POST')
export const del = createRequest('DELETE')
