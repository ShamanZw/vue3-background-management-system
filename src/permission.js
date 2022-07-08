import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 * @param {*} to 要到哪里去
 * @param {*} from 你从哪里来
 * @param {*} next 是否要去
 */
router.beforeEach(async (to, from, next) => {
  // 用户已登录，则不允许进入login
  // 用户未登录，则只允许进入login
  if (store.getters.token) {
    // 用户已登录，则不允许进入login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户未登录，则只允许进入login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
