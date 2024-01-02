<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerList, getHomeCategoryList, getHomeHotList, getHomeGoodsGuessLikeList } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import { ref } from "vue";

// 1.轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerList()
  console.log("轮播图数据: ", res)
  bannerList.value = res.result
}
// 2.分类面板数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryList()
  console.log("分类面板数据: ", res)
  categoryList.value = res.result
}

// 3.热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotList()
  console.log("热门推荐数据: ", res)
  hotList.value = res.result
}

// 4.猜你喜欢
const getHomeGoodsGuessLikeData = async () => {
  const res = await getHomeGoodsGuessLikeList()
  console.log("猜你喜欢数据: ", res)

}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
  getHomeGoodsGuessLikeData()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view scroll-y class="scroll-view">
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess />
    <!-- <view class="index">index</view> -->
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #F7F7F7;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-view {
  flex: 1;
}
</style>
