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
