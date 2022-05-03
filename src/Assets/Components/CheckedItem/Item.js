import Button from "../Button/Button";
import "./item.scss";

function CheckedItem ({text, children, color, name}) {
    return (
        <li className="checked-item">
            <input className="checked-input" name={name} type="radio"/>
            <p className="checked-text">{text}</p>
            <Button  style={{backgroundColor: color}}>{children}</Button>
        </li>
    )
}

export default CheckedItem;