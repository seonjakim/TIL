export const API_END_POINT = 'API END POINT'

const request =  async (url) => {
  const res = await fetch(url)

  if (res.ok) {
    const json = await res.json()
    return json
  }

  throw new Error('요청에 실패함')
}

export const fetchLanguages = async (keyword) => request(`${API_END_POINT}/languages?keyword=${keyword}`)