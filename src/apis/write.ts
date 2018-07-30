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

export function write<TBuffer extends Buffer | Uint8Array>(
    fd: number,
    data: TBuffer | string,
    offset?: number,
    length?: number,
    position?: number
): Promise<[number, TBuffer | string]> {

    if (typeof data === "string") {

        return new Promise<[number, TBuffer | string]>(function(
            resolve,
            reject
        ): void {

            $fs.write(fd, data, offset, function(err, w, s): void {

                if (err) {

                    return reject(err);
                }

                resolve([w, s]);
            });
        });
    }

    return new Promise<[number, TBuffer | string]>(function(
        resolve,
        reject
    ): void {

        $fs.write(fd, data, offset, length, position, function(
            err, w, s
        ): void {

            if (err) {

                return reject(err);
            }

            resolve([w, s]);
        });
    });
}
