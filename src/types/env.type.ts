import { DotenvConfig } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

interface Env {
  ID_PREFIX: string;
  API_URL: string;
  TEXT_URL: string;
  LTEXT_URL: string;
  FILE_DIR: string;
  IMAGE_DIR: string;
  TEXT_DIR: string;
  TEXT_TYPE: ".md" | ".txt";
}

export interface EnvExt extends DotenvConfig, Env {}

export type EnvKey = keyof Env;
