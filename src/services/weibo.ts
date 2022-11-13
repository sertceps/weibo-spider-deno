/**
 * 获取微博分页数据
 */
import { Card9, Mblog, PicCard, PicCards } from "../types/weibo.type.ts";
import { getImageApi, getPagingWeiboApi } from "./api.ts";
import { genTextType } from "./config.ts";
import { mkdir, writeTextFile, writeFile } from "./utils.ts";

/** 获取指定页码微博数据 
 *@param containerId
 @param sinceId 
*/
export async function getWeibo(containerId: string, sinceId?: string) {
  const { data } = await getPagingWeiboApi(containerId, sinceId);
  return data;
}

/** 获取微博总条数 */
export async function getTotal(containerId: string) {
  const { cardlistInfo } = await getWeibo(containerId);
  return cardlistInfo.total;
}

/** 从文本提取图片链接 */
// function extractImgUrl(text: string) {
// TODO
// }

/** 解析微博文本 */
function parseText(mblog: Mblog) {
  const { text } = mblog;
  if (/全文<\/a>$/.test(text)) {
    // TODO: 获取全文
  }

  return text.replaceAll(/(:?<.*?>)*/g, "") + "\r\n\r\n";
}

/** 保存文本到文件 */
export async function saveText(path: string, cards: Card9[]) {
  // TODO 处理一下文件已存在的逻辑
  for (const card of cards) {
    await writeTextFile(
      `${path}/${cards[0].mblog.id}${genTextType()}`,
      parseText(card.mblog)
    );
    console.log(parseText(card.mblog));
  }
}

/** 返回文件名*/
function extractImageName(url: string) {
  return url.match(/large\/(.*\.jpg)/)?.[1] ?? Date.now().toString() + ".jpg";
}

/** 请求并保存文件 */
async function downloadImage(path: string, picCard: PicCard) {
  for (const url of picCard.urls) {
    writeFile(`${path}/${extractImageName(url)}`, await getImageApi(url));
    console.log(url);
  }
}

/** 下载一个 card 的文件 */
async function save(path: string, picCards: PicCards) {
  const dir = `${path}/${picCards[0].id}`;
  await mkdir(dir);
  for (const card of picCards) {
    await downloadImage(dir, card);
  }
}

/** 保存图片到文件 */
export async function saveImage(path: string, cards: Card9[]) {
  const picCards = cards
    .filter((card) => card.mblog.pics && card.mblog.pics.length > 0)
    .map((card) => ({
      id: card.mblog.id,
      urls: card.mblog.pics?.map((item) => item.large.url),
    }))
    .filter((item) => item.urls!.length > 0);

  if (picCards.length === 0) return;
  await save(path, picCards as PicCards);
}
