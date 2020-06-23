<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>关键词搜索</span>
    </div>
    <echarts-key-world />
    <table-key-view />
    <el-pagination
      class="pagination-key"
      background
      layout="prev, pager, next"
      :total="100"
      :page-size="4"
    ></el-pagination>
  </el-card>
</template>

<script>
import TableKeyView from './table'
import EchartsKeyWorld from './echarts'
export default {
  components: {
    TableKeyView,
    EchartsKeyWorld,
  },
}
</script>

<style scoped lang="scss">
.pagination-key {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
