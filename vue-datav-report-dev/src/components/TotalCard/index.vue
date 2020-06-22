<template>
  <common-card title="累计销售额" value="$ 32,039,165">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">36.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">$ 32,039,165</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMinxin from '../../mixins'
export default {
  mixins: [commonCardMinxin],
}
</script>

<style lang="scss" scoped>
.compare {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25px;
  font-size: 12px;
  line-height: 25px;
  padding-top: 3px;
}
</style>
