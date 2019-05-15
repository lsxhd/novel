import request from '@/utils/request'

export function getAllBook () {
  return request({
    url: '/getAllBook',
    method: 'get'
  })
}
export function getChapterNumber (bookId) {
  return request({
    url: '/getChapterNumber',
    method: 'get',
    params: { bookId }
  })
}
export function getChapter (bookId, chapterId) {
  return request({
    url: '/getChapter',
    method: 'get',
    params: {bookId, chapterId}
  })
}
export function upload (formDate) {
  return request({
    url: '/upload',
    method: 'post',
    ContentType: 'multipart/form-data',
    withCredentials: false,
    data: formDate
  })
}

export function insertRate (bookRate) {
  return request({
    url: '/insertRate',
    method: 'post',
    data: bookRate
  })
}

export function searchBooksByName (bookName, startNumber, endNumber) {
  return request({
    url: '/searchBooksByName',
    method: 'get',
    params: {bookName, startNumber, endNumber}
  })
}

export function getAllBookByLimit (startNumber, endNumber) {
  return request({
    url: '/getAllBookByLimit',
    method: 'get',
    params: {startNumber, endNumber}
  })
}

export function getRelationBook (userId) {
  return request({
    url: '/getRelationBook',
    method: 'get',
    params: {userId}
  })
}
