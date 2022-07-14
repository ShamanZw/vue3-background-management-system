<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <SidebarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></SidebarItem>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateMenus(fRoutes)
})
</script>

<style lang="scss" scoped></style>
