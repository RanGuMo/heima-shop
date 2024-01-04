import type { GoodsItem } from './global'

// 一级分类项
export type CategoryTopItem = {
  // 二级分类集合【二级分类项】
  children: CategoryChildItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}

// 二级分类项
export type CategoryChildItem = {
  // 商品集合【商品项】
  goods: GoodsItem[]
  id: string
  name: string
  picture: string
}
