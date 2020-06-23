<template>
  <div class="wrapper-header">
    <div class="wrapper-header-item">
      <common-card title="搜索用户数" value="94,893">
        <div :style="{height:'100%'}" id="key-world-user"></div>
      </common-card>
    </div>
    <div class="wrapper-header-item">
      <common-card title="搜索量" value="187,422">
        <div :style="{height:'100%'}" id="key-world-num"></div>
      </common-card>
    </div>
  </div>
</template>

<script>
import commonCard from '../../mixins'
export default {
  mixins: [commonCard],
  mounted() {
    this.initUser()
    this.initNum()
  },
  methods: {
    initUser() {
      const chartDom = document.getElementById('key-world-user')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: [
              330,
              310,
              320,
              302,
              298,
              286,
              264,
              253,
              232,
              211,
              198,
              195,
              176,
              154,
              143,
              99,
              50,
              12,
            ],
            areaStyle: {
              color: '#80d4f6',
            },
            lineStyle: {
              color: '#2b90d9',
            },
            itemStyle: {
              opacity: 0,
            },
          },
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 30,
        },
      })
    },
    initNum() {
      const chartDom = document.getElementById('key-world-num')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: [
              500,
              450,
              420,
              470,
              390,
              475,
              251,
              384,
              182,
              388,
              98,
              289,
              231,
              419,
              239,
              249,
              159,
              521,
              152,
              321,
            ],
            areaStyle: {
              color: '#80d4f6',
            },
            lineStyle: {
              color: '#2b90d9',
            },
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
          },
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 30,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper-header {
  display: flex;
  .wrapper-header-item {
    width: 50%;
  }
}
</style>