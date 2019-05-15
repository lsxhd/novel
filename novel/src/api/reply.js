import request from '@/utils/request'

export function getReplyByPostId (postId) {
  return request({
    url: '/getReplyByPostId',
    method: 'get',
    params: {postId}
  })
}
export function saveReply (reply) {
  return request({
    url: '/saveReply',
    method: 'post',
    data: reply
  })
}
