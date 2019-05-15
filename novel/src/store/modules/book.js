
// const book = {
// //   state: {
// //     bookCase: {
// //
// //     }
// //   },
// //   mutations: {
// //     SET_USERID: (state, userId) => {
// //       state.userId = userId
// //     },
// //     GET_USERID: (state) => {
// //       return state.userId
// //     }
// //   },
// //
// //   actions: {
// //     // 登录
// //     Login ({ commit }, user) {
// //       console.log('登录')
// //       return new Promise((resolve, reject) => {
// //         login(user).then(response => {
// //           const data = response
// //           console.log('user 登录：')
// //           console.log(data.data.data.id)
// //           setUser(data.data.data.id)
// //           commit('SET_USERID', data.data.data.id)
// //           resolve()
// //         }).catch(error => {
// //           console.log('用户名或者密码不对')
// //           reject(error)
// //         })
// //       })
// //     },
// //
// //     // 获取用户信息
// //     GetInfo ({ commit, state }) {
// //       return new Promise((resolve, reject) => {
// //         getInfo(state.token).then(response => {
// //           const data = response.data
// //           if (data.role.roles && data.role.roles.length > 0) { // 验证返回的roles是否是一个非空数组
// //             commit('SET_ROLES', data.role.roles)
// //           } else {
// //             // reject('getInfo: roles must be a non-null array !')
// //           }
// //           commit('SET_NAME', data.username)
// //           commit('SET_AVATAR', data.avatar)
// //           resolve(response)
// //         }).catch(error => {
// //           reject(error)
// //         })
// //       })
// //     },
// //
// //     // 登出
// //     LogOut ({ commit, state }) {
// //       return new Promise((resolve, reject) => {
// //         logout(state.token).then(() => {
// //           commit('SET_USER', '')
// //           removeUser()
// //           resolve()
// //         }).catch(error => {
// //           reject(error)
// //         })
// //       })
// //     },
// //
// //     // 前端 登出
// //     FedLogOut ({ commit }) {
// //       return new Promise(resolve => {
// //         commit('SET_USERID', '')
// //         console.log('登出')
// //         removeUser()
// //         resolve()
// //       })
// //     }
// //   }
// //
// // }
// // export default book
