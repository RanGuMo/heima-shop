import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

/**
 * 获取热门推荐数据-特惠推荐-小程序
 * @param
 * @returns
 */
type HotParams = PageParams & { subType?: string }  // 交叉类型，HotParams 的类型等于 PageParams的类型 加上subType?: string 
export const getHotRecommendAPI = (url:string,data?:HotParams) => {
  return http<any[]>({
    method: 'GET',
    url,
    data
  })
}
