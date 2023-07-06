import { BLOG_ID, DELOLD, HOME_BLOG_ARRAY, LOAD, SINGLE_BLOG, STORE_DATA, WHO } from "./actionTypes"

export const storeData = (payload) => {
   return {
      type: STORE_DATA,
      payload
   }
}

export const delData = (payload) => {
   return {
      type: DELOLD,
      payload
   }
}

export const whoLogin = (payload) => {
   return {
      type: WHO,
      payload
   }
}

export const homeBlogsArray = (payload) => {
   return {
      type: HOME_BLOG_ARRAY,
      payload
   }
}

export const setLoading = (payload) => {
   return {
      type: LOAD,
      payload
   }
}


export const blogObj=(payload)=>{
  return {
   type:SINGLE_BLOG,
   payload
  }
}


