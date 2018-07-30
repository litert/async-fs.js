/**
 * Copyright 2018 Angus.Fenying <fenying@litert.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { stat } from "./stat";
import { readdir } from "./readdir";

export async function size(
    path: string
): Promise<number> {

    let st = await stat(path);

    const prs: Array<Promise<number>> = [];

    if (!st.isDirectory()) {

        return st.size;
    }

    let ret: number = 0;

    for (let item of await readdir(path)) {

        const itemPath = `${path}/${item}`;

        st = await stat(itemPath);

        if (st.isDirectory()) {

            prs.push(size(itemPath));
        }
        else {

            ret += st.size;
        }
    }

    if (prs.length) {

        for (let s of await Promise.all(prs)) {

            ret += s;
        }
    }

    return ret;
}
