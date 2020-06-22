<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'
import SalesView from '@/components/SalesView'
import TopView from '@/components/TopView'
export default {
  name: 'Home',
  components: {
    BottomView,
    MapView,
    SalesView,
    TopView
  }
}
</script>
<style>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #eeeeee;
}
</style>
