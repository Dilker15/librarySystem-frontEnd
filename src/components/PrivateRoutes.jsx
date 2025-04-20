import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


export function PrivateRoutes({children}){
    const {userData} = useContext(UserContext);
    return userData.isLogged? children:<Navigate to={"/login"}/>;
}