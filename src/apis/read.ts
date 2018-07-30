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

import * as $fs from "fs";

export function read<TBuffer extends Buffer | Uint8Array>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null
): Promise<[number, TBuffer]> {

    return new Promise<[number, TBuffer]>(function(resolve, reject): void {

        $fs.read(
            fd,
            buffer,
            offset,
            length,
            position,
            function(err, r, b): void {

                if (err) {

                    return reject(err);
                }

                resolve([r, b]);
            }
        );
    });
}
