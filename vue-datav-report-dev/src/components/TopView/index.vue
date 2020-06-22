<template>
  <div class="row-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-card />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-order />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-user />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-user />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalUser from '../TotalUser'
import TotalOrder from '../TotalOrder'
import TodayUser from '../TodayUser'
import TotalCard from '../TotalCard'
export default {
  components: {
    TotalUser,
    TotalOrder,
    TodayUser,
    TotalCard
  }
}
</script>

<style>
</style>
