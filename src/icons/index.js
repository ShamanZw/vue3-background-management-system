// 导入所有的svg图标
import SvgIcon from '@/components/SvgIcon'
// 参考文档:https://webpack.docschina.org/guides/dependency-management/#requirecontext
const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回了一个Require函数，可以接收一个request的参数，用于require的导入
// 该函数提供了三个属性，可以通过svgRequire.keys()获得所有的svg图标
// 遍历图标，把图标作为request参数传入到svgRequire导入函数中，完成本地图标导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

// 完成SvgIcon的全局注册
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
