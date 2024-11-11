import { v4,v7 } from "uuid";
//UUID v7の文字列を出力
console.log(v7());

export const createUuid=()=>{
    return v7();
};