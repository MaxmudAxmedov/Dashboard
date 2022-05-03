

// scss file import
import { NavLink } from "react-router-dom";
import "./logo.scss";


function Logo ({img, title, page}) {
    return(
        <li className="logo-item">
            <img className="logo-img" src={img} alt="img logo" />
            <NavLink to={page} className="logo">{title}</NavLink>
        </li>
    )
    
}

export default Logo;