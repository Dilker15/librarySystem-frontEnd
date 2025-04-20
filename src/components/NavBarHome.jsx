import { Link } from "react-router-dom";
import '../styles/NavBar.css'



export function NavBarHome(){

    return (<>
        <nav className="navbar navbar-expand-lg"  style={{ backgroundColor: "#ffffff" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Free Library</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link next_link_home" href="#">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link next_link_home" to={"/login"}>Login</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                            <div className="container-fluid">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search Book" aria-label="Search"/>
                                <button className="btn nav_con" type="submit">Search</button>
                            </form>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
    </>);
}