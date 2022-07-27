<template>
  <div class="article-ranking-container">
    <el-card>
      <el-table ref="tableRef" :data="tableData" border>
        <el-table-column
          :label="$t('msg.article.ranking')"
          prop="ranking"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.article.title')"
          prop="title"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.article.author')"
          prop="author"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.article.publicDate')"
          prop="publicDate"
        >
        </el-table-column>
        <el-table-column
          :label="$t('msg.article.desc')"
          prop="desc"
        ></el-table-column>
        <el-table-column :label="$t('msg.article.action')">
          <el-button type="primary" size="mini" @click="onShowClick(row)">{{
            $t('msg.article.show')
          }}</el-button>
          <el-button type="danger" size="mini" @click="onRemoveClick(row)">{{
            $t('msg.article.remove')
          }}</el-button>
        </el-table-column>
      </el-table>

      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 50, 100, 200]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onActivated } from 'vue'
import { getArticleList } from '@/api/article'
import { watchSwitchLang } from '@/utils/i18n'

// 数据相关
const tableData = ref([])
const total = ref(0)
const page = ref(1)
const size = ref(10)

// 获取数据的方法
const getListData = async () => {
  const result = await getArticleList({
    page: page.value,
    size: size.value
  })
  tableData.value = result.list
  total.value = result.total
}
getListData()
// 监听语言切换
watchSwitchLang(getListData)
// 处理数据不重新加载的问题
onActivated(getListData)

/**
 * size 改变触发
 */
const handleSizeChange = (currentSize) => {
  size.value = currentSize
  getListData()
}

/**
 * 页码改变触发
 */
const handleCurrentChange = (currentPage) => {
  page.value = currentPage
  getListData()
}

// 点击查看
const onShowClick = (row) => {}

// 点击删除
const onRemoveClick = (row) => {}
</script>

<style lang="scss" scoped>
.article-ranking-container {
  .header {
    margin-bottom: 20px;
    .dynamic-box {
      display: flex;
      align-items: center;
      .title {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  ::v-deep .el-table__row {
    cursor: pointer;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
