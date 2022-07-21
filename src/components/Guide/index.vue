<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <span @click="onClick" id="guide-start">
        <svg-icon icon="guide"></svg-icon>
      </span>
    </el-tooltip>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import steps from './steps'
import { watchSwitchLang } from '../../utils/i18n'

const i18n = useI18n()

let driver = null
onMounted(() => {
  initDriver()
})

const initDriver = () => {
  driver = new Driver({
    // opacity: 0.1,
    // animate: false,
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
}

// 语言切换时，重新初始化Driver
watchSwitchLang(initDriver)

const onClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style lang="scss" scoped></style>
