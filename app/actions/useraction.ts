"use server";


import redis from "@/lib/redis";
import { fakeUsers,faketaxi,faketaxivideos,faketaxiadultvidoes } from "@/lib/fakedb";

export async function  getuser(userid:string) {
    const key=`user:${userid}`
    const cacheddata=await redis.get(key);
    console.log("cached data = ",cacheddata)
    if(cacheddata){
        console.log("redis redissss");
        return JSON.parse(cacheddata)
    }
    console.log("thats not db mfers")
    console.log("data  = ",fakeUsers[userid]);
    const data = fakeUsers[userid as keyof typeof fakeUsers];
    console.log("data = ",typeof(data));
    if(data){
        await redis.set(key,JSON.stringify(data),"EX",60*60*24);
    }
    return data||null;
}