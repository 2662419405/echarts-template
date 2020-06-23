<template>
  <div class="bottom-view">
    <key-word-view />
    <fence-view />
  </div>
</template>

<script>
import FenceView from '../FenceView'
import KeyWordView from '../KeyWordView'

export default {
  components: {
    FenceView,
    KeyWordView,
  },
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  > div {
    width: 50%;
    box-sizing: border-box;
    &:first-of-type {
      margin-right: 10px;
    }
    &:last-of-type {
      margin-left: 10px;
    }
  }
}
</style>
