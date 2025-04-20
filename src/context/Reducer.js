


export function userReducer(initialState,action){
    if(action.type == 'login'){
        return {
            ...initialState,
            user:action.payload,
            isLogged:true,
        }
    }else if(action.type == 'logout'){
        return {
            ...initialState,
            isLogged:false,
        }
    }else{
        return initialState;
    }
    
}