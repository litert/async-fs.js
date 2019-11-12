export type AutoAsync<A extends boolean, V> = A extends true ? Promise<V> : V;

export interface IFile<IsAsync extends boolean = true> {

    position: number;

    size(): AutoAsync<IsAsync, number>;

    close(): AutoAsync<IsAsync, void>;

    write(buf: Buffer | string, bytes?: number): AutoAsync<IsAsync, number>;

    writeInt8(item: number): AutoAsync<IsAsync, number>;

    writeUInt8(item: number): AutoAsync<IsAsync, number>;

    writeInt16LE(item: number): AutoAsync<IsAsync, number>;

    writeInt16BE(item: number): AutoAsync<IsAsync, number>;

    writeUInt16LE(item: number): AutoAsync<IsAsync, number>;

    writeUInt16BE(item: number): AutoAsync<IsAsync, number>;

    writeInt32LE(item: number): AutoAsync<IsAsync, number>;

    writeInt32BE(item: number): AutoAsync<IsAsync, number>;

    writeUInt32LE(item: number): AutoAsync<IsAsync, number>;

    writeUInt32BE(item: number): AutoAsync<IsAsync, number>;

    writeInt64LE(item: number | BigInt): AutoAsync<IsAsync, number>;

    writeInt64BE(item: number | BigInt): AutoAsync<IsAsync, number>;

    writeUInt64LE(item: number | BigInt): AutoAsync<IsAsync, number>;

    writeUInt64BE(item: number | BigInt): AutoAsync<IsAsync, number>;

    writeArrayOfInt8(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfUInt8(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfInt16LE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfInt16BE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfUInt16LE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfUInt16BE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfInt32LE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfInt32BE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfUInt32LE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfUInt32BE(items: number[]): AutoAsync<IsAsync, number>;

    writeArrayOfInt64LE(items: Array<number | BigInt>): AutoAsync<IsAsync, number>;

    writeArrayOfInt64BE(items: Array<number | BigInt>): AutoAsync<IsAsync, number>;

    writeArrayOfUInt64LE(items: Array<number | BigInt>): AutoAsync<IsAsync, number>;

    writeArrayOfUInt64BE(items: Array<number | BigInt>): AutoAsync<IsAsync, number>;

    read(bytes: number): AutoAsync<IsAsync, Buffer>;

    readUtf8String(bytes: number): AutoAsync<IsAsync, string>;

    readEOZString(bytes: number): AutoAsync<IsAsync, string>;

    readInt8(): AutoAsync<IsAsync, number>;

    readUInt8(): AutoAsync<IsAsync, number>;

    readInt16LE(): AutoAsync<IsAsync, number>;

    readInt16BE(): AutoAsync<IsAsync, number>;

    readUInt16LE(): AutoAsync<IsAsync, number>;

    readUInt16BE(): AutoAsync<IsAsync, number>;

    readInt32LE(): AutoAsync<IsAsync, number>;

    readInt32BE(): AutoAsync<IsAsync, number>;

    readUInt32LE(): AutoAsync<IsAsync, number>;

    readUInt32BE(): AutoAsync<IsAsync, number>;

    readInt64LE(): AutoAsync<IsAsync, number>;

    readInt64BE(): AutoAsync<IsAsync, number>;

    readUInt64LE(): AutoAsync<IsAsync, number>;

    readUInt64BE(): AutoAsync<IsAsync, number>;

    readInt64LEAsBigInt(): AutoAsync<IsAsync, BigInt>;

    readInt64BEAsBigInt(): AutoAsync<IsAsync, BigInt>;

    readUInt64LEAsBigInt(): AutoAsync<IsAsync, BigInt>;

    readUInt64BEAsBigInt(): AutoAsync<IsAsync, BigInt>;

    readArrayOfInt8(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt8(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfInt16LE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfInt16BE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt16LE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt16BE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfInt32LE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfInt32BE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt32LE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt32BE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfInt64LE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfInt64BE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt64LE(count: number): AutoAsync<IsAsync, number[]>;

    readArrayOfUInt64BE(count: number): AutoAsync<IsAsync, number[]>;
}
