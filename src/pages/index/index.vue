<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
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
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"/>
  <!-- 分类面板 -->
  <CategoryPanel/>
  <!-- <view class="index">index</view> -->
</template>

<style lang="scss">
page{
  background-color:#F7F7F7;
}
</style>
