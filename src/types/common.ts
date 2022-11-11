export enum CardType {
  Card4 = 4,
  /** 博文 */
  Card9 = 9,
  /** 用户 */
  Card10 = 10,
  Card11 = 11,
}

export interface ResData<T, U> {
  cardlistInfo: T;
  cards: U;
}

export interface Success<T> {
  ok: 1;
  data: T;
}
