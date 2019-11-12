import * as C from "./Common";
import { promises as $FS } from "fs";

class File implements C.IFile {

    public constructor(private _fd: $FS.FileHandle) {}
}

export async function createFile(
    path: string,
    flag: string,
    mode?: number
): Promise<C.IFile> {

    return new File(await $FS.open(path, flag, mode));
}
