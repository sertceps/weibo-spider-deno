/**
 * 获取微博分页数据
 */

import { getPagingWeiboApi } from "./api.ts";
import { search } from "../src/search.ts";

/** 获取指定页码微博数据 
 *@param containerId
 @param sinceId 
*/
export async function getWeiboByPage(containerId: string, sinceId: string) {
  //   const {} = await getPagingWeiboApi(containerId, sinceId);
}

async function getWeibo() {
  const containerId = await search();
  const { data } = await getPagingWeiboApi(containerId);
  console.log(data.cards[0]);
  console.log(data.cards[1].mblog);
}

getWeibo();
