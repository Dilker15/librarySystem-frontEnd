import { useContext } from "react";
import { GridBooks } from "../components/GridBooks";
import { NavBarHome } from "../components/NavBarHome";
import { UserContext } from "../context/UserContext";
import {Paginate} from '../Components/Paginate';
import '../styles/Home.css';


export function HomePage(){
    const {userData} = useContext(UserContext)
    console.log(userData)
    return (<>
        <div className="container-home">
            <NavBarHome/>
            <GridBooks/>
            <Paginate page={10} limit={10} elements={10}/>
        </div>
           
            
    </>);
}