<template>
  <common-card title="累计订单量" value="2,123,223">
    <template>
      <div :style="{height: '100%',width:'100%'}" id="total-order-template" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCard from '../../mixins'
export default {
  mixins: [commonCard],
  mounted() {
    const chartDom = document.getElementById('total-order-template')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: 'line',
          data: [620, 432, 220, 543, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          areaStyle: {
            color: '#30A9DE',
          },
          lineStyle: {
            color: '#30A9DE',
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true
        },
      ],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    })
  },
}
</script>
