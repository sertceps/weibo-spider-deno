import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { EnvExt } from "../types/env.type.ts";

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

/** 追加模式写入文件 */
export async function writeToFile(
  path: string,
  data: string | ArrayBuffer,
  arrBuffer = false
) {
  await Deno.writeFile(
    path,
    arrBuffer
      ? new Uint8Array(data as ArrayBuffer)
      : new TextEncoder().encode(data as string),
    { append: true }
  );
}

/** 创建文件夹 */
export async function mkdir(path: string) {
  await Deno.mkdir(path, { recursive: true });
  return path;
}
