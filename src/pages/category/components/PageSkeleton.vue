<template name="skeleton">
    <view class="sk-container">
        <view class="viewport viewport">
            <view class="search search">
                <view class="input input">
                    <text
                        class="icon-search sk-transparent sk-text-14-2857-307 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
                </view>
            </view>
            <view class="categories categories">
                <scroll-view scroll-y="true" class="primary primary">
                    <view class="item active sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-686 sk-text">居家</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-603 sk-text">美食</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-984 sk-text">服饰</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-824 sk-text">母婴</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-284 sk-text">个护</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-332 sk-text">严选</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-704 sk-text">数码</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-480 sk-text">运动</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-864 sk-text">杂项</text>
                    </view>
                </scroll-view>
                <scroll-view scroll-y="true" class="secondary secondary">
                    <view is="components/XtxSwiper" class="banner banner">
                        <view class="carousel XtxSwiper--carousel">
                            <swiper circular="true" interval="3000" current="0" autoplay="false">
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                                <swiper-item
                                    style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                        <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                                    </navigator>
                                </swiper-item>
                            </swiper>
                            <view class="indicator XtxSwiper--indicator">
                                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                                <text class="dot XtxSwiper--dot"></text>
                            </view>
                        </view>
                    </view>
                    <view class="panel panel">
                        <view class="title title">
                            <text class="name sk-transparent sk-text-26-6667-843 sk-text">居家生活用品</text>
                            <navigator class="more sk-transparent sk-text-30-0000-679 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </view>
                        <view class="section section">
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-242 sk-text">梅乃宿梅酒720毫升</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-38 sk-text">168.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-486 sk-text">法国年份雅文邑700毫升</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-563 sk-text">1480.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-34 sk-text">多米尼加陈年朗姆酒700毫升</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-11 sk-text">238.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-977 sk-text">全新升级，四川酸辣粉195克*6杯
                                </view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-700 sk-text">69.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-347 sk-text">川味牛肉辣椒酱190克</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-741 sk-text">38.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-302 sk-text">极光限定 珠光蓝珐琅锅</view>
                                <view class="price price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-654 sk-text">199.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-521 sk-text">智利老牌名庄，梅洛干红750毫升
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-193 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅
                                </view>
                            </navigator>
                            <navigator class="goods goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-680 sk-text">楼兰灰枣328克</view>
                            </navigator>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<style scoped>
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-307 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-686 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-603 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-984 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-824 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-284 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-332 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-704 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-480 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-864 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-26-6667-843 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-30-0000-679 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-242 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-38 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-486 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-563 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-34 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-11 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-977 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-700 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-347 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-741 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-302 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-654 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-521 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-193 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-680 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
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
}</style>