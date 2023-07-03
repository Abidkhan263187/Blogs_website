import { DELOLD, STORE_DATA, WHO } from "./actionTypes"

export const storeData=(payload)=>{
 return{
    type:STORE_DATA,
    payload
 }
}

export const delData=(payload)=>{
   return{
      type:DELOLD,
       payload
   }
}

export const whoLogin=(payload)=>{
   return {
      type:WHO,
      payload
   }
}