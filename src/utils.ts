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
