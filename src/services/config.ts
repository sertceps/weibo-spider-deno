import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.163.0/path/posix.ts";
import { genSearchParams, getEnvs } from "./utils.ts";

const { API_URL, ID_PREFIX, FILE_DIR, IMAGE_DIR, TEXT_DIR, TEXT_TYPE } =
  await getEnvs();
const root = dirname(fromFileUrl(import.meta.url + "/../../"));

/** 生成搜索 url */
export const genSearchUrl = (name: string, page = 1) =>
  `${API_URL}${genSearchParams({
    containerid: `100103type=3&q=${name}&t=`,
    page_type: "searchall",
    page: page.toString(),
  })}`;

/** 生成分页数据 url */
export const genPagingUrl = (containerId: string, sinceId = "") =>
  `${API_URL}containerid=${containerId}&since_id=${sinceId}`;

/** 生成 containerId */
export const genContainerId = (id: string) => ID_PREFIX + id;

/** 文件入口目录 */
export const genFileDir = () => `${root}/${FILE_DIR}`;
/** 用户文件夹 */
export const genUserDir = (containerId: string) =>
  `${genFileDir()}/${containerId}`;
/** 图像目录 */
export const genImageDir = (containerId: string) =>
  `${genUserDir(containerId)}/${IMAGE_DIR}`;
/** 文本目录 */
export const genTextDir = (containerId: string) =>
  `${genUserDir(containerId)}/${TEXT_DIR}`;

/** 文本文件类型 */
export const genTextType = () => TEXT_TYPE;
