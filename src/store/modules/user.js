import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 登录请求动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            // console.log(data)
            this.commit('user/setToken', data.token)
            // 跳转
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * 获取用户信息
     */
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * 退出登录
     */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      // TODO: 清理权限相关配置
      router.push('/login')
    }
  }
}
