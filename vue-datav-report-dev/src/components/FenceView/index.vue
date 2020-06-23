<template>
  <el-card>
    <div slot="header" class="clearfix bottom-view-echarts">
      <div class="fence-header">
        <span>分类销量排行</span>
        <el-radio-group v-model="defaultShang" size="small">
          <el-radio-button label="品类"></el-radio-button>
          <el-radio-button label="商品"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="fence-view-container">
      <div id="fence-view-echart" :style="{height:'100%'}"></div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      defaultShang: '品类',
    }
  },
  mounted() {
    const chartDom = document.getElementById('fence-view-echart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      title: [
        {
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666',
          },
          left: 20,
          top: 20,
        },
        {
          text: '累计订单量',
          subtext: '390',
          x: '34.5%',
          y: '47.5%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14,
            color: '#999',
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333',
          },
        },
      ],
      legend: {
        orient: 'vertical',
        right: '10%',
        top: '50%',
        data: ['粉面粥店', '简餐便当', '汉堡披萨'],
        // heigth: 250,
        // type: 'scroll',
      },
      tooltip: {
        trigger: 'item',
        formatter: params => {
          const str =
            params.seriesName +
            '<br/>' +
            params.marker +
            params.data.legendname +
            '<br/>' +
            '数量: ' +
            params.data.value +
            '<br/>' +
            '占比' +
            params.data.percent +
            '%'
          return str
        },
      },
      series: [
        {
          name: '商品',
          type: 'pie',
          data: [
            {
              legendname: '粉面粥店',
              value: 67,
              percent: '15.40',
              itemStyle: {
                color: '#ede574',
              },
              name: '粉面粥店',
            },
            {
              legendname: '简餐便当',
              value: 97,
              percent: '22.30',
              itemStyle: {
                color: '#f1bbba',
              },
              name: '简餐便当',
            },
            {
              legendname: '汉堡披萨',
              value: 92,
              percent: '21.15',
              itemStyle: {
                color: '#00dffc',
              },
              name: '汉堡披萨',
            },
          ],
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: params => {
                return params.data.legendname
              },
            },
          },
          center: ['35%', '55%'],
          radius: ['65%', '80%'],
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true,
            },
          },
          itemStyle: {
            borderWidth: 4,
            borderColor: '#fff',
          },
        },
      ],
    })
  },
}
</script>

<style lang="scss" scoped>
.fence-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 21px;
}
.fence-view-container {
  height: 50vh;
}
</style>
