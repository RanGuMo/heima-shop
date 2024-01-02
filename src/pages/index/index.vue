<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerList } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app'

const getHomeBannerData = async () => {
  const res = await getHomeBannerList()
  console.log(res)
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
