// scss file import
import "./item.scss";

function Item ({text, number}) {
    return (
        <li className="item">
            <p className="item-text">{text}</p>
            <strong className="item-number">{number}</strong>
        </li>
    )
}

export default Item;