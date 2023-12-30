<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

import '@/utils/http'
// 测试接口 的按钮事件
const getData = () => {
  uni.request({
    url: '/home/banner',
    method: 'GET',
  })
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '1234567890',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData" size="mini" plain type="warn">测试接口</button>
  </view>
</template>

<style lang="scss">
//
</style>
