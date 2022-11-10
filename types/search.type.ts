import { CardType, ResData, Success } from "./common.ts";

export interface CardlistInfo {
  total: number;
  page_size: string;
  /** 下一页页码 */
  page: number;
}

/** 搜索返回第一页才有 */
export interface Card4 {
  card_type: CardType.Card4;
}

export interface User {
  id: number;
  screen_name: string;
  description: string;
  followers_count: string;
  avatar_hd: string;
  gender: string;
  verified: true;
}

export interface CardGroup {
  card_type: CardType.Card10;
  user: User;
}

/** 搜索需要的 Card 类型 11 */
export interface Card11 {
  card_type: CardType.Card11;
  card_group: CardGroup[];
}

// cards: [Card4, ...Array<Card11>] | OtherPageCard;
export type SearchResData = ResData<CardlistInfo, Card4[] | Card11[]>;
export type SearchRes = Success<SearchResData>;
