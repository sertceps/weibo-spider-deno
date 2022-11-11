import {
  genFileDir,
  genImageDir,
  genTextDir,
  genUserDir,
} from "./services/config.ts";
import { mkdir } from "./services/utils.ts";
import { getTotal, getWeibo, saveImage, saveText } from "./services/weibo.ts";
import { search } from "./services/search.ts";

/** 初始化文件夹 */
async function initDir(containerId: string) {
  await mkdir(genFileDir());
  const userDir = await mkdir(genUserDir(containerId));
  const textDir = await mkdir(genTextDir(containerId));
  const imageDir = await mkdir(genImageDir(containerId));

  return { userDir, textDir, imageDir };
}

async function bootstrap() {
  const containerId = await search();
  const { textDir, imageDir } = await initDir(containerId);
  const total = await getTotal(containerId);
  let sinceId = "";
  for (let i = 0; i < total; i++) {
    const { cardlistInfo, cards } = await getWeibo(containerId, sinceId);
    // await saveText(textDir, cards);
    await saveImage(imageDir, cards);
    sinceId = cardlistInfo.since_id.toString();
  }
}

bootstrap();
