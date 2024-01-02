import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import type { PageParams, PageResult } from '@/types/global'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置：1为首页，2为分类商品页） 默认是1
 * @returns
 */
export const getHomeBannerList = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-分类列表-小程序
 * @returns
 */
export const getHomeCategoryList = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 * @returns
 */
export const getHomeHotList = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 首页-猜你喜欢-小程序
 * @returns
 */
export const getHomeGoodsGuessLikeList = (data?:PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}
