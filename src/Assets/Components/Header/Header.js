// Avatar.js import
import Avatar from "../Avatar/Avatar";

// scss file
import "./header.scss";

// imgs import
import Search from "../../Img/img-header/search.png";
import New from "../../Img/img-header/new.png";   

function Header () {
    return(
        <header>
            <div className="container">
                <div className="head">
                    <div className="head-content">
                        <a className="head-link" href={"#link"}>Overview</a>
                        <div className="head-icons">
                            <img className="head-icon" src={Search} alt="search img"/>
                            <img className="head-icon" src={New} alt="message img"/> 
                        </div>
                    </div>
                    <Avatar className="avatar"/>
                </div>
            </div>
        </header>
    )
}

export default Header;