import request from '@/utils/request'

export function login (users) {
  return request({
    url: '/login',
    method: 'post',
    data: users
  })
}

export function loginManagement (users) {
  return request({
    url: '/loginManagement',
    method: 'post',
    data: users
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
