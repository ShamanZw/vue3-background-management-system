import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import store from './store'
import router from './router'
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/index.scss'
// 导入svgIcon
import installIcons from '@/icons'
// 导入路由鉴权
import './permission'
// filter
import installFilter from '@/filter'
// 指令
import installDirective from '@/directives'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)
app.use(store).use(router).use(i18n).mount('#app')
