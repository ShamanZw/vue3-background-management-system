<template>
  <div class="">
    {{ $t('msg.test') }}
    <div class="demo-pagination-block">
      <div class="demonstration">Total item count</div>
      <el-pagination
        v-model:currentPage="currentPage1"
        :page-size="100"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
