// scss file import
import "./cardMain.scss";

function CardMain ({text, numbers}) {
    return (
        <div className="main-card">
            <h3 className="main-card-title">{text}</h3>
            <p className="main-card-number">{numbers}</p>
        </div>
    )
}

export default CardMain;