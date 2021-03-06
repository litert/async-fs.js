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

export function readdir(
    path: string
): Promise<string[]> {

    return new Promise<string[]>(function(resolve, reject): void {

        $fs.readdir(path, function(err, result): void {

            if (err) {

                return reject(err);
            }

            resolve(result);
        });
    });
}
