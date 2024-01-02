<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerList,getHomeCategoryList } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem,CategoryItem } from '@/types/home';
import { ref } from "vue";

// 1.轮播图数据
const bannerList =ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerList()
  console.log("轮播图数据: "+res)
  bannerList.value = res.result
}
// 2.分类面板数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryList()
  console.log("分类面板数据: "+res)
  categoryList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar/>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"/>
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList"/>
  <!-- 热门推荐 -->
  <HotPanel/>

  <!-- <view class="index">index</view> -->
</template>

<style lang="scss">
page{
  background-color:#F7F7F7;
}
</style>
