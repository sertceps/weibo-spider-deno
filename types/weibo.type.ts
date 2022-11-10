import { CardType, ResData, Success } from "./common.ts";

interface CardlistInfo {
  total: number;
  since_id: number;
}

interface Pic {
  pid: string;
  large: { url: string };
  /** 图 + 视频？ */
  videoSrc?: string;
}

interface PageInfo {
  type: "video";
  urls: {
    mp4_720p_mp4: string;
    mp4_hd_mp4: string;
    mp4_ld_mp4: string;
  };
}

interface Mblog {
  id: string;
  bid: string;
  created_at: string;
  isLongText: boolean;
  /** pageInfo 和 pic 没有共存 */
  pageInfo?: PageInfo;
  pics?: Pic[];
  /** 是否是转发 */
  retweeted_status?: unknown;
}

interface Card9 {
  card_type: CardType.Card9;
  mblog: Mblog[];
}

export type WeiboResData = ResData<CardlistInfo, Card9[]>;
export type WeiboRes = Success<WeiboResData>;
