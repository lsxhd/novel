import request from '@/utils/request'

export function user (username, password) {
  return request({
    url: '/user',
    method: 'get',
    params: {
      username, password
    }
  })
}
export function recordOperation (orderReaderid, orderBookid, orderReadername, orderBookname, orderOperation) {
  return request({
    url: '/operation',
    method: 'get',
    params: {
      order_readerid: orderReaderid,
      order_bookid: orderBookid,
      order_readername: orderReadername,
      order_bookname: orderBookname,
      order_operation: orderOperation
    }
  })
}
export function showOperation () {
  return request({
    url: '/order',
    method: 'get'
  })
}
