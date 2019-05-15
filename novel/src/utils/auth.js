import Cookies from 'js-cookie'

const userId = 'userId'

export function getUser () {
  return Cookies.get(userId)
}

export function setUser (id) {
  return Cookies.set(userId, id)
}

export function removeUser () {
  return Cookies.remove(userId)
}
