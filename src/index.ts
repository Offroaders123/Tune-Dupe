import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { createInterface } from "node:readline/promises";
import fromAsync from "array-from-async";

const files = await fromAsync(getFiles("/Users/brandon/Music/Music/Media/Music/"));

for (const file of files){
  console.log(file);
}

export async function * getFiles(directory: string): AsyncGenerator<string,void,unknown> {
  for (const entry of await readdir(directory,{ withFileTypes: true })){
    const path = resolve(directory,entry.name);

    if (entry.isDirectory()){
      yield * getFiles(path);
    } else {
      yield path;
    }
  }
}