import { genSearchParams, getEnvs } from "./utils.ts";

const { API_URL, ID_PREFIX } = await getEnvs();

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
