import { UserContext } from "./UserContext";
import { Auth } from "../helper/services/auth";
import { useReducer } from "react";
import { userReducer } from "./Reducer";


function initialData(){
    const userData = JSON.parse(localStorage.getItem('user'));
    return {
        isLogged:userData?true:false,
        user:userData,
    }
}

export function UserProvider({children}){
    const [userData,dispatch] = useReducer(userReducer,{},initialData)

    const login = async(email,password)=>{
        const {token,userData,res}= await Auth.login(email,password);
        if(!res){
            return{res:false,message:"Credentials Error"};
        }

        const user = {token,data:{...userData}};
        localStorage.setItem('user',JSON.stringify(user));

        const action = {
            type:'login',
            payload:user.data,
        };

        dispatch(action);
        return{res:true,message:"Login Successfull"};
    }



    const logout = ()=>{
        
    }
    return (
        <UserContext.Provider value={{userData,login,logout}}>
            {children}
        </UserContext.Provider>
    );
}