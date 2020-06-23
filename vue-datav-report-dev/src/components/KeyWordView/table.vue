<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="rank" label="排名" width="180"></el-table-column>
    <el-table-column prop="world" label="关键词" width="180"></el-table-column>
    <el-table-column prop="num" label="总搜索量"></el-table-column>
    <el-table-column prop="user" label="搜索用户"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          rank: '1',
          world: '重庆',
          num: '9389',
          user: 15780,
        },
        {
          rank: '2',
          world: '南京',
          num: '8456',
          user: 8450,
        },
        {
          rank: '3',
          world: '北京',
          num: '7895',
          user: 6540,
        },
        {
          rank: '4',
          world: '山东',
          num: '4589',
          user: 4580,
        },
      ],
    }
  },
}
</script>

<style>
</style>