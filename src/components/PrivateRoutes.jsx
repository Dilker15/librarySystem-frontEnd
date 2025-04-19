import { Navigate } from "react-router-dom";


export function PrivateRoutes({children}){
    const x = "Dilker";
    return x == "Dilke"? children:<Navigate to={"/login"}/>;
}