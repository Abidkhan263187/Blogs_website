import { DELOLD, RELOAD, STORE_DATA, WHO } from "./actionTypes"


const  initialState={
blogArray:[],
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
      
        default :return store
    }
}