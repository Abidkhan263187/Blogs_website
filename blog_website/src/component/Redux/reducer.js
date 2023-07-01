import { STORE_DATA } from "./actionTypes"


const  initialState={
blogArray:[]
}

export const reducer =(store=initialState,action)=>{
    switch(action.type){
        case STORE_DATA:{
            return {...store,blogArray:action.payload}
        }
        default :return store
    }
}