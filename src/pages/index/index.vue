<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerList } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home';
import { ref } from "vue";

// 轮播图数据
const bannerList =ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerList()
  console.log(res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar/>
  <XtxSwiper :list="bannerList"/>
  <!-- <view class="index">index</view> -->
</template>

<style lang="scss">
//
</style>
