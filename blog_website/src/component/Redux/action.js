import { STORE_DATA } from "./actionTypes"

export const storeData=(payload)=>{
 return{
    type:STORE_DATA,
    payload
 }
}