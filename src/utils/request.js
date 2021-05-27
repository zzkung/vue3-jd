import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/fd8c284cf0ed0da6ea8218256806f57d/jd',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
  })
}
