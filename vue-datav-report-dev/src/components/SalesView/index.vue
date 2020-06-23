<template>
  <el-card class="box-card">
    <sales-view-header />
    <div class="sales-view-wrapper">
      <div class="sales-view-left">
        <div :style="{height:'100%'}" id="sales-view-container-echarts"></div>
      </div>
      <div class="sales-view-right">
        <div class="sales-view-title">排行榜</div>
        <ul class="sales-view-list">
          <li class="sales-view-item" v-for="(item, index) in dataList" :key="index">
            <span :class="['sales-view-item-title',index<3&&'top-sales']">{{ index+1 }}</span>
            <span class="sales-view-item-name">{{ item.name }}</span>
            <span class="sales-view-item-num">{{ item.num }}</span>
          </li>
        </ul>
      </div>
    </div>
  </el-card>
</template>

<script>
import SalesViewHeader from './header'
export default {
  components: { SalesViewHeader },
  data() {
    return {
      dataList: [
        {
          name: '肯德基',
          num: '323,321',
          id: 1,
        },
        {
          name: '麦当劳',
          num: '312,321',
          id: 2,
        },
        {
          name: '肯德基',
          num: '288,321',
          id: 3,
        },
        {
          name: '海底捞',
          num: '266,121',
          id: 4,
        },
        {
          name: '西贝面村',
          num: '223,321',
          id: 5,
        },
        {
          name: '汉堡王',
          num: '219,321',
          id: 6,
        },
        {
          name: '真功夫',
          num: '203,321',
          id: 7,
        },
      ],
    }
  },
  mounted() {
    const chartDom = document.getElementById('sales-view-container-echarts')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      title: {
        text: '年度销售额',
      },
      xAxis: {
        type: 'category',
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: '#999',
          },
        },
        axisLine: {
          lineStyle: {
            color: '#999',
          },
        },
        axisLabel: {
          color: '#333',
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            // 使用深浅的间隔色
            color: ['#eee'],
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          barWidth: '35%',
          color: '#41D3BD',
        },
      ],
      grid: {
        top: 50,
        left: 50,
        bottom: 20,
        right: 50,
      },
      tooltip: {
        show: true,
        formatter: '{b0}销量为: {c0}',
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
}
.sales-view-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  .sales-view-right {
    width: 400px;
  }
  .sales-view-left {
    flex: 1 1 auto;
  }
  .sales-view-title {
    margin-bottom: 20px;
  }
  .sales-view-item {
    font-size: 14px;
    display: flex;
  }
  .sales-view-item-title {
    margin: 0 15px 10px 0;
    font-size: 12px;
    width: 20px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    &.top-sales {
      background: #000;
      color: #fff;
      border-radius: 50%;
    }
  }
  .sales-view-item-name {
    font-weight: 500;
  }
  .sales-view-item-num {
    flex: 1;
    text-align: right;
  }
}
</style>
