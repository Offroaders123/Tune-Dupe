import * as fs from "node:fs/promises";
import { createInterface } from "node:readline/promises";

console.log(await readSongs("/Users/brandon/Music/Music/Media/Music/"));

export async function readSongs(path: string){
  const songs = await fs.readdir(path,{ withFileTypes: true });
  return songs;
}