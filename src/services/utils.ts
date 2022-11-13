import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { EnvExt } from "../types/env.type.ts";
import {
  copy,
  readerFromStreamReader,
} from "https://deno.land/std@0.163.0/streams/mod.ts";
import { WeiboBinRes } from "../types/weibo.type.ts";

/** 从 .env 获取 env */
export async function getEnvs() {
  return (await config()) as EnvExt;
}

/** 构造 URLSearchParams */
export function genSearchParams(params: Record<string, string>) {
  return new URLSearchParams(params).toString();
}

/** 退出程序 */
export function exit(msg: string): never {
  console.log(msg);
  Deno.exit();
}

/** 写入文本 */
export async function writeTextFile(path: string, data: string) {
  await Deno.writeTextFile(path, data, { append: true, create: true });
}

/** 保存文件 */
export async function writeFile(path: string, reader: WeiboBinRes) {
  const file = await Deno.open(path, { create: true, write: true });
  await copy(readerFromStreamReader(reader), file);
  file.close();
}

/** 创建文件夹 */
export async function mkdir(path: string) {
  await Deno.mkdir(path, { recursive: true });
  return path;
}
