<script setup lang="ts">
import type { GuessItem } from '@/types/home';
import { ref, onMounted } from 'vue';
import { getHomeGoodsGuessLikeList } from '@/services/home';
import type { PageParams } from '@/types/global';

// 分页参数
const pageParams: Required<PageParams> = {
    page: 1,
    pageSize: 10
}
// 猜你喜欢商品列表
const guessList = ref<GuessItem[]>([])
// 是否结束
const finish = ref(false)
// 猜你喜欢
const getHomeGoodsGuessLikeData = async () => {
    // 已经结束，退出函数执行，并提示用户
    if (finish.value === true) {
        return uni.showToast({
            icon: 'none',
            title: '没有数据了~'
        })
    }
    const res = await getHomeGoodsGuessLikeList(pageParams)
    console.log("猜你喜欢数据: ", res)
    // 数组追加
    guessList.value.push(...res.result.items)
    // 当前页面是否 小于 总页码
    if (pageParams.page < res.result.pages) {
        // 更新分页参数 (页码累加)
        pageParams.page++
    } else {
        // 标记为已结束
        finish.value = true
    }

    // guessList.value = res.result.items
}

// 重置数据
const resetData = () => {
    pageParams.page = 1
    guessList.value = []
    finish.value = false
}

// 组件挂载完毕再进行数据的获取
onMounted(() => {
    getHomeGoodsGuessLikeData()
})

// 对外暴露 加载更多方法 以及重置数据方法
defineExpose({
    getMore: getHomeGoodsGuessLikeData,
    resetData
})
</script>

<template>
    <!-- 猜你喜欢 -->
    <view class="caption">
        <text class="text">猜你喜欢</text>
    </view>
    <view class="guess">
        <navigator class="guess-item" v-for="item in guessList" :key="item.id" :url="`/pages/goods/goods?id=${item.id}`">
            <image class="image" mode="aspectFill" :src="item.picture"></image>
            <view class="name">{{ item.name }}</view>
            <view class="price">
                <text class="small">¥</text>
                <text>{{ item.price }}</text>
            </view>
        </navigator>
    </view>
    <view class="loading-text"> {{ finish ? '没有数据了~' : '正在加载...' }} </view>
</template>

<style lang="scss">
:host {
    display: block;
}

/* 分类标题 */
.caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    padding: 36rpx 0 40rpx;
    font-size: 32rpx;
    color: #262626;

    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 28rpx 0 30rpx;

        &::before,
        &::after {
            content: '';
            width: 20rpx;
            height: 20rpx;
            background-image: url(@/static/images/bubble.png);
            background-size: contain;
            margin: 0 10rpx;
        }
    }
}

/* 猜你喜欢 */
.guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;

    .guess-item {
        width: 345rpx;
        padding: 24rpx 20rpx 20rpx;
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        overflow: hidden;
        background-color: #fff;
    }

    .image {
        width: 304rpx;
        height: 304rpx;
    }

    .name {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
    }

    .small {
        font-size: 80%;
    }
}

// 加载提示文字
.loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
}
</style>