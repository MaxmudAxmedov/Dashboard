// scss file import
import "./logo.scss";

function Logo ({img, title}) {
    return(
        <li className="logo-item">
            <img className="logo-img" src={img} alt="img logo" />
            <p className="logo-title">{title}</p>
        </li>
    )

}

export default Logo;