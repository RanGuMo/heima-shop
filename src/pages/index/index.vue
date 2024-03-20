<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerList, getHomeCategoryList, getHomeHotList } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/components'
import PageSkeleton from '@/components/PageSkeleton.vue' //骨架屏导入
// 1.轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerList()
  console.log('轮播图数据: ', res)
  bannerList.value = res.result
}
// 2.分类面板数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryList()
  console.log('分类面板数据: ', res)
  categoryList.value = res.result
}

// 3.热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotList()
  console.log('热门推荐数据: ', res)
  hotList.value = res.result
}

const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  console.log('滚动到底部了')
  // 触底了，可以请求更多数据了
  guessRef.value?.getMore() //调用子组件中 加载更多方法
}

// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新事件
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置 猜你喜欢列表的数据
  guessRef.value?.resetData() //调用子组件中 重置列表数据方法
  // 重新发起请求 加载数据
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(), //调用子组件中 加载数据方法
  ])
  // 关闭动画
  isTriggered.value = false
}

// 加载中标记
const isLoading = ref(false)

// 页面加载时触发
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    enable-back-to-top
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-view {
  flex: 1;
}
</style>
