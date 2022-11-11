import { SearchRes } from "../types/search.type.ts";
import { WeiboRes } from "../types/weibo.type.ts";
import { genPagingUrl, genSearchUrl } from "./config.ts";
import http from "./http.ts";

/**
 * 通过名称搜索
 */
export async function searchByNameApi(name: string, page = 1) {
  return await http.get<SearchRes>(genSearchUrl(name, page));
}

/**
 * 分页获取博文
 */
export async function getPagingWeiboApi(containerId: string, sinceId = "") {
  return await http.get<WeiboRes>(genPagingUrl(containerId, sinceId));
}

/**
 * 请求图片
 */
export async function getImageApi(url: string) {
  return await http.get<ArrayBuffer>(url, true);
}
