import request from '@/utils/request'

export function insertBookShelf (bookShelf) {
  return request({
    url: '/insertBookShelf',
    method: 'post',
    data: bookShelf
  })
}

export function deleteBookShelf (bookShelf) {
  return request({
    url: '/deleteBookShelf',
    method: 'post',
    data: bookShelf
  })
}

export function getBookShelf (bookShelf) {
  return request({
    url: '/getBookShelf',
    method: 'post',
    data: bookShelf
  })
}
export function getAllBookShelf (userId) {
  return request({
    url: '/getAllBookShelf',
    method: 'get',
    params: { userId }
  })
}
