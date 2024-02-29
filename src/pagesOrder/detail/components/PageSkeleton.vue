<!--
此文件为开发者工具生成，生成时间: 2024/2/29上午10:26:02
使用方法：
在 C:\Users\Administrator\Documents\HBuilderProjects\heima-shop\dist\dev\mp-weixin\pagesOrder\detail\detail.wxml 引入模板

```
<import src="detail.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 C:\Users\Administrator\Documents\HBuilderProjects\heima-shop\dist\dev\mp-weixin\pagesOrder\detail\detail.wxss 中引入样式
```
@import "./detail.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar" style="padding-top: 20px">
      <view class="wrap wrap">
        <navigator
          class="back icon-home sk-pseudo sk-pseudo-circle"
          open-type="switchTab"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-674 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view enable-back-to-top="true" scroll-y="true" class="viewport viewport" id="scroller">
      <view class="overview sk-image" style="padding-top: 40px">
        <view
          class="status icon-clock sk-transparent sk-text-0-0000-731 sk-text sk-pseudo sk-pseudo-circle"
          >等待付款
        </view>
        <view class="tips sk-transparent">
          <text class="money sk-transparent sk-text-0-0000-954 sk-text">应付金额: ¥ 99.00</text>
          <text class="time sk-transparent sk-text-0-0000-252 sk-text">支付剩余</text> 00 时 29 分
          59 秒
        </view>
        <view
          class="button sk-transparent sk-text-28-1250-937 sk-text"
          style="background-position-x: 50%"
          >去支付
        </view>
      </view>
      <view class="shipment shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-69 sk-text">
            您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
          </view>
          <view class="date sk-transparent sk-text-14-2857-776 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-553 sk-text"> 张三 13333333333 </view>
          <view class="address sk-transparent sk-text-14-2857-659 sk-text">
            广东省 广州市 天河区 黑马程序员
          </view>
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-605 sk-text"
                >ins风小碎花泡泡袖衬110-160cm
              </view>
              <view class="type sk-transparent sk-text-22-2222-215 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-940 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-337 sk-text"
                >ins风小碎花泡泡袖衬110-160cm
              </view>
              <view class="type sk-transparent sk-text-22-2222-335 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-884 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <view class="action action">
            <view
              class="button primary sk-transparent sk-text-28-3333-352 sk-text"
              style="background-position-x: 50%"
              >申请售后</view
            >
            <navigator
              class="button sk-transparent sk-text-28-3333-30 sk-text"
              style="background-position-x: 50%"
            >
              去评价
            </navigator>
          </view>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-264 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-253 sk-text sk-pseudo sk-pseudo-circle"
              >99.00
            </view>
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-447 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-160 sk-text sk-pseudo sk-pseudo-circle"
              >10.00
            </view>
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-725 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-628 sk-text sk-pseudo sk-pseudo-circle"
            >
              109.00</view
            >
          </view>
        </view>
      </view>
      <view class="toolbar toolbar" style="padding-bottom: 0px">
        <view class="button primary sk-transparent sk-text-14-2857-422 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-401 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2024/2/29上午10:26:02

在 C:\Users\Administrator\Documents\HBuilderProjects\heima-shop\dist\dev\mp-weixin\pagesOrder\detail\detail.wxss 中引入样式
```
@import "./detail.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-674 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-0-0000-731 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}

.sk-text-0-0000-954 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}

.sk-text-0-0000-252 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}

.sk-text-28-1250-937 {
  background-image: linear-gradient(
    transparent 28.125%,
    #eeeeee 0%,
    #eeeeee 71.875%,
    transparent 0%
  ) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}

.sk-text-14-2857-69 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-776 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-553 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-659 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-605 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-22-2222-215 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-940 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-337 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-22-2222-335 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}

.sk-text-14-2857-884 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-28-3333-352 {
  background-image: linear-gradient(
    transparent 28.3333%,
    #eeeeee 0%,
    #eeeeee 71.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-28-3333-30 {
  background-image: linear-gradient(
    transparent 28.3333%,
    #eeeeee 0%,
    #eeeeee 71.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}

.sk-text-0-0000-264 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}

.sk-text-0-0000-253 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}

.sk-text-0-0000-447 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}

.sk-text-0-0000-160 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}

.sk-text-0-0000-725 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}

.sk-text-0-0000-628 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}

.sk-text-14-2857-422 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-401 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
