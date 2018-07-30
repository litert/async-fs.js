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

export interface ReadFileAPI {

    (
        path: string
    ): Promise<Buffer>;

    (
        path: string,
        encoding: string
    ): Promise<string>;
}

export const readFile: ReadFileAPI = function(...args: any[]): Promise<any> {

    if (typeof args[0] !== "string") {

        return Promise.reject(
            new TypeError("The argument 0 must be a string.")
        );
    }

    if (typeof args[1] === "string") {

        return new Promise<string>(function(resolve, reject): void {

            $fs.readFile(args[0], {
                encoding: args[1] as string
            }, function(err, data): void {

                if (err) {

                    return reject(err);
                }

                resolve(data);
            });
        });
    }

    return new Promise<Buffer>(function(resolve, reject): void {

        $fs.readFile(args[0], function(err, data): void {

            if (err) {

                return reject(err);
            }

            resolve(data);
        });
    });
};
