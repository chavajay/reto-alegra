import router from '@/router'
import jwtDecode from 'jwt-decode'
const headers = new Headers()
headers.append('Content-Type', 'application/json')

const expiredToken = () => {
  const user: any = jwtDecode(localStorage.token)
  // token expiration time
  const time = new Date(user.exp * 1000 - 5 * 60 * 1000)
  if (time < new Date()) {
    localStorage.removeItem('token')
    const query = router.currentRoute.path
    router.replace({ path: '/login', query: { returnUrl: query } })
  }
}

const get = async <T>(url: string, secure = false) => {
  try {
    if (secure) {
      expiredToken()
      headers.append('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
    }

    const response = await fetch(url, {
      method: 'GET',
      headers
    })

    const data = await response.json()

    headers.delete('Authorization')

    if (data.statusCode === 401) {
      throw new Error(data.body._embedded.detail[0])
    }

    return data as T
  } catch (e) {
    console.error(e)

    return {} as T
  }
}

const post = async <T>(url: string, body: object, secure = false) => {
  if (secure) {
    expiredToken()
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  headers.delete('Authorization')

  return await response.json() as T
}

const postFile = async <T>(url: string, body: FormData, secure = false) => {
  if (secure) {
    expiredToken()
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
  }

  const response = await fetch(url, {
    method: 'POST',
    body
  })

  headers.delete('Authorization')

  return await response.json() as T
}

const put = async <T>(url: string, body: object, secure = false) => {
  if (secure) {
    expiredToken()
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
  }
  const response = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body)
  })

  headers.delete('Authorization')

  return await response.json() as T
}

const _delete = async <T>(url: string, secure = false) => {
  if (secure) {
    expiredToken()
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
  }

  const response = await fetch(url, {
    method: 'DELETE',
    headers
  })

  headers.delete('Authorization')

  return await response.json() as T
}

const patch = async <T>(url: string, body: object, secure = false) => {
  if (secure) {
    expiredToken()
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
  }

  const response = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body)
  })

  headers.delete('Authorization')

  return await response.json() as T
}

export const http = {
  get,
  post,
  put,
  postFile,
  patch,
  delete: _delete
}
