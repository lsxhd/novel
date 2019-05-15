import request from '@/utils/request'

export function getPostByBookId (bookId) {
  return request({
    url: '/getPostByBookId',
    method: 'get',
    params: {bookId}
  })
}
export function savePost (post) {
  return request({
    url: '/savePost',
    method: 'post',
    data: post
  })
}
