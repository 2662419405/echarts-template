<template>
  <div class="el-card__header">
    <div slot="header" class="clearfix wrapper-menu">
      <div class="left-wrapper-menu">
        <el-menu
          mode="horizontal"
          :default-active="defaultActive"
          @select="handleSelect"
        >
          <el-menu-item index="1">销售额</el-menu-item>
          <el-menu-item index="2">访问量</el-menu-item>
        </el-menu>
      </div>
      <div class="right-wrapper-menu">
        <el-radio-group v-model="dataTime" size="small">
          <el-radio-button label="今日"></el-radio-button>
          <el-radio-button label="本周"></el-radio-button>
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="今年"></el-radio-button>
        </el-radio-group>
        <el-date-picker
          size="small"
          v-model="timeWeek"
          align="right"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          unlink-panels
          class="right-wrapper-menu-datapicker"
        ></el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '1',
      dataTime: '今年',
      timeWeek: '',
    }
  },
  methods: {
    handleSelect(key) {
      this.$data.defaultActive = key
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .right-wrapper-menu-datapicker {
    margin-left: 20px;
  }
  .right-wrapper-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
