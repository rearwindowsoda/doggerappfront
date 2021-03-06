import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../../contexts/user.context";
import './NavBar.css'

export const NavBar = () => {
    const {logged, setLogged} = useContext(UserContext);
    return (
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
           <Link to={"/"}><img src="logo.png" alt="asd"/></Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="btn btn-outline-primary">Home</Link></li>
                <li><Link to="/top10" className="btn btn-outline-success">Top 10 Dogs</Link></li>
                {logged && <li><Link to='/add-post' className="btn btn-outline-info">Add post 🐕‍</Link></li>}
            </ul>

            <div className="col-md-3 text-end">
                {!logged ? <Link to="/login" className="btn btn-outline-primary me-2">Login</Link> : ''}
                {!logged ? <Link to="/register" className="btn btn-primary">Sign-up</Link> : ''}
                {logged && <Link to = '/logout' className="btn btn-primary">Log out</Link>}
            </div>
        </header>
    )
}