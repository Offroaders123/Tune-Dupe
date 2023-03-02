import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { createInterface } from "node:readline/promises";
import fromAsync from "array-from-async";

const files = await fromAsync(getFiles("/Users/brandon/Music/Music/Media/Music/"));

for (const file of files){
  console.log(file);
}

export interface GetFilesOptions {
  recursive?: boolean;
  includeHidden?: boolean;
}

/**
 * Creates an AsyncGenerator object which returns the paths for all files within a directory.
*/
export async function * getFiles(directory: string, { recursive = true, includeHidden = false }: GetFilesOptions = {}): AsyncGenerator<string,void,unknown> {
  for (const entry of await readdir(directory,{ withFileTypes: true })){
    const path = resolve(directory,entry.name);

    if (entry.isDirectory() && recursive){
      yield * getFiles(path);
    } else {
      if (entry.name.startsWith(".") && !includeHidden) continue;
      yield path;
    }
  }
}