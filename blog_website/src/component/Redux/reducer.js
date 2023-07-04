import { DELOLD, HOME_BLOG_ARRAY, RELOAD, STORE_DATA, WHO } from "./actionTypes"


const  initialState={
blogArray:[],
homeBlogArray:[],
who:''

}

export const reducer =(store=initialState,action)=>{
    switch(action.type){
        case STORE_DATA:{
            return {...store,blogArray:action.payload}
        }
        case DELOLD:{
            return {...store,blogArray:action.payload}
        }
        case WHO:{
            return{...store,who:action.payload}
        }
        case HOME_BLOG_ARRAY:{
            return {...store,homeBlogArray:action.payload}
        }
      
        default :return store
    }
}