<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: String
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value{
  font-size: 25px;
  letter-spacing: 1px;
  margin-top: 5px;
  color: #000;
}
.chart{
  height: 50px;
}
.line{
  border-top: 1px solid #eeeeee;
  margin: 10px 0;
}
.total{
  font-size: 12px;
}
</style>
