// src/pages/my/my.vue

<script setup lang="ts">
import { useMemberStore } from '@/stores';
import { useGuessList } from '@/composables';
// 1.获取会员信息
const memberStore = useMemberStore();


// 猜你喜欢 写法一：
// // 获取猜你喜欢组件实例
// const guessRef = ref<XtxGuessInstance>()
// // 滚动触底
// const onScrolltolower = () => {
//   // console.log('滚动触底啦~')
//   guessRef.value?.getMore()
// }

// 2.猜你喜欢组合式函数 写法二：
const { guessRef, onScrolltolower } = useGuessList();

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 订单选项
const orderTypes = [
  { type: 1, text: '待付款', icon: 'icon-currency' },
  { type: 2, text: '待发货', icon: 'icon-gift' },
  { type: 3, text: '待收货', icon: 'icon-check' },
  { type: 4, text: '待评价', icon: 'icon-comment' },
]
</script>

<template>
  <scroll-view class="viewport" scroll-y enable-back-to-top @scrolltolower="onScrolltolower">
    <!-- 个人资料 -->
    <view class="profile" :style="{ paddingTop: safeAreaInsets!.top + 'px' }">
      <!-- 情况1：已登录 -->
      <view class="overview" v-if="memberStore.profile">
        <navigator url="/pagesMember/profile/profile" hover-class="none">
          <!--  aspectFill：保持纵横比并填充容器，可能会裁剪图像以适应容器。
                aspectFit：保持纵横比并适应容器，可能会在容器内留有空白。
                cover：保持纵横比并填充容器，但不裁剪图像，可能会使图像的一部分被裁剪。
                contain：保持纵横比并适应容器，图像完全包含在容器内。 -->
          <image class="avatar" mode="aspectFill" :src="memberStore.profile.avatar"></image>
        </navigator>
        <view class="meta">
          <view class="nickname"> {{ memberStore.profile.nickname || memberStore.profile.account }} </view>
          <navigator class="extra" url="/pagesMember/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
      </view>
      <!-- 情况2：未登录 -->
      <view class="overview" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image class="avatar gray" mode="aspectFill"
            src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png">
          </image>
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname">
            未登录
          </navigator>
          <view class="extra">
            <text class="tips">点击登录账号</text>
          </view>
        </view>
      </view>
      <navigator class="settings" url="/pagesMember/settings/settings" hover-class="none">
        设置
      </navigator>
    </view>
    <!-- 我的订单 -->
    <view class="orders">
      <view class="title">
        我的订单
        <navigator class="navigator" url="/pagesOrder/list/list?type=0" hover-class="none">
          查看全部订单<text class="icon-right"></text>
        </navigator>
      </view>
      <view class="section">
        <!-- 订单 -->
        <navigator v-for="item in orderTypes" :key="item.type" :class="item.icon"
          :url="`/pagesOrder/list/list?type=${item.type}`" class="navigator" hover-class="none">
          {{ item.text }}
        </navigator>
        <!-- 客服 -->
        <button class="contact icon-handset" open-type="contact">售后</button>
      </view>
    </view>
    <!-- 猜你喜欢 -->
    <view class="guess">
      <XtxGuess ref="guessRef" />
    </view>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f8;
}

.viewport {
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/center_bg.png);
  background-size: 100% auto;
}

/* 用户信息 */
.profile {
  margin-top: 20rpx;
  position: relative;

  .overview {
    display: flex;
    height: 120rpx;
    padding: 0 36rpx;
    color: #fff;
  }

  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .gray {
    filter: grayscale(100%);
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 30rpx;
    padding: 16rpx 0;
    margin-left: 20rpx;
  }

  .nickname {
    max-width: 350rpx;
    margin-bottom: 16rpx;
    font-size: 30rpx;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .extra {
    display: flex;
    font-size: 20rpx;
  }

  .tips {
    font-size: 22rpx;
  }

  .update {
    padding: 3rpx 10rpx 1rpx;
    color: rgba(255, 255, 255, 0.8);
    border: 1rpx solid rgba(255, 255, 255, 0.8);
    margin-right: 10rpx;
    border-radius: 30rpx;
  }

  .settings {
    position: absolute;
    bottom: 0;
    right: 40rpx;
    font-size: 30rpx;
    color: #fff;
  }
}

/* 我的订单 */
.orders {
  position: relative;
  z-index: 99;
  padding: 30rpx;
  margin: 50rpx 20rpx 0;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

  .title {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 28rpx;
    color: #1e1e1e;

    .navigator {
      font-size: 24rpx;
      color: #939393;
      float: right;
    }
  }

  .section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40rpx 20rpx 10rpx;

    .navigator,
    .contact {
      text-align: center;
      font-size: 24rpx;
      color: #333;

      &::before {
        display: block;
        font-size: 60rpx;
        color: #ff9545;
      }
    }

    .contact {
      padding: 0;
      margin: 0;
      border: 0;
      background-color: transparent;
      line-height: inherit;
    }
  }
}

/* 猜你喜欢 */
.guess {
  background-color: #f7f7f8;
  margin-top: 20rpx;
}
</style>





















<!-- <script setup lang="ts">
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

import { http } from '@/utils/http'
// 测试接口 的按钮事件
const getData = async () => {
  const res = await http<number[]>({
    url: '/member/profile',
    method: 'GET',
  })
  console.log('获取数据成功', res.result)
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
</style> -->
