import { DotenvConfig } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

interface Env {
  ID_PREFIX: string;
  API_URL: string;
  TEXT_URL: string;
  LTEXT_URL: string;
}

export interface EnvExt extends DotenvConfig, Env {}

export type EnvKey = keyof Env;
