import { Card11, SearchResData } from "../types/search.type.ts";
import { searchByNameApi } from "./api.ts";
import { genContainerId } from "./config.ts";
import { exit } from "./utils.ts";

/** 获取输入 */
function ask() {
  return prompt("请输入要查询的账号昵称：") ?? exit("已退出");
}

/**
 * 精确搜索到结果则返回 containerId
 */
function getContainId(data: SearchResData, name: string) {
  const target = (data.cards[1] as Card11)?.card_group[0];
  if (target?.user?.screen_name === name) {
    const id = target.user.id;
    return genContainerId(id.toString());
  }
  exit("未找到用户");
}

/** 搜索
 * @return containerId
 */
export async function search() {
  const nickname = ask();
  const { data } = await searchByNameApi(nickname);
  return getContainId(data, nickname);
}
