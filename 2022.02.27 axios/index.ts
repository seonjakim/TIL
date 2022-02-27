//  SIMULTANEOUS DATA
function getData() {
  axios
  .all([axios.get('http://jsonplaceholder.typicode.com/todos'),
        axios.get('http://jsonplaceholder.typicode.com/posts')])
  .then(axios.spread((todos, posts) => showOutput(posts)))
  .catch(err => console.error(err))
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} reqeust sent to ${config.url} at ${new Date().getTime()}`)
  return config
}, error => {
  return Promise.reject(error)
})

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  }
  axios
    .post('http://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    }, config)
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'http://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase()
      return data
    })
  }
  axios(options).then(res => showOutput(res))
}

// AXIOS GLOBALS
axios.defaluts.headers.common['X-Auth-Token'] = 'sometoken'

// ERROR HANDLING
function errorHandling() {
  axios
    .get('http://hsonplaceholder.typicode.com/todoss?_limit=5', {
      validateStatus: (status) => status < 500 // reject only if status is greate or equal to 500
    })
    .then(res => showOutput(res))
    .catch(err => {
      if(err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request)
      } else {
        console.error(err.message)
      }
    })
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source()
  axios
  .get('http://hsonplaceholder.typicode.com/todos', {
    cancelToken: source.token
  })
  .then(res => showOutput(res))
  .catch(thrown => {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message)
    }
  })

  if (true) {
    source.concel('Request canceled!')
  }
}

// AXIOS INSTANCE
const axiosInstance = axios.create({
  //Other custom settings
  baseURL: 'http://hsonplaceholder.typicode.com'
})

axiosInstance.get('/comments').then(res => showOutput(res))

// TIMEOUT
function getTodos() {
  axios
  .get('http://hsonplaceholder.typicode.com/todos', {
    timeout: 5000
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err))
}