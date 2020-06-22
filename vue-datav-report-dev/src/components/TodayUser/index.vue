<template>
  <common-card title="今日交易用户数" value="81,014">
    <template>
      <div :style="{height: '100%',width:'100%'}" id="today-user-template" />
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCard from '../../mixins'
export default {
  mixins: [commonCard],
  mounted() {
    const chartDom = document.getElementById('today-user-template')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        show: false,
        type: 'category',
        data: [
          '00:00',
          '01:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
        ],
      },
      tooltip: { show: true },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          barWidth: '60%',
        },
      ],
      grid: { top: 0, bottom: 0, left: 0, right: 0 },
      color: '#A593E0',
    })
  },
}
</script>

<style>
</style>
