
// scss file
import "./avatar.scss"

// imgs file
import Profile from "../../Img/img-header/photo.png";

function Avatar () {
    return (
        <div className="avatar">
            <p className="avatar-text">Jones Ferdinand</p>
            <img className="avatar-img" src={Profile} alt="Profile img"/>
        </div>
    )
}

export default Avatar;