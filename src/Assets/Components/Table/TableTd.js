import Button from "../Button/Button";

import "./table.scss";

function TD (props) {

    const {img, title, condition, name, date, moth, time, icon, children, color} = props;

    return(
        <>
            <td className="table-profile">
               <img className="table-img" src={img} alt="profile img" />
            </td>
       
            <td className="table-info">
                <h3 className="title">{title}</h3>
                <p className="condition">{condition}</p>
            </td>
            <td className="table-customer">
                <h3 className="name">{name}</h3>
                <p className="date">{date}</p>
            </td>
            
            <td className="table-date">
                <time className="date-month">{moth}</time>
                <time className="date-time">{time}</time>
            </td>

            <td className="table-button">
                <Button style={{backgroundColor: color}}>{children}</Button>
            </td>

            <td className="table-icon-block">
                <img className="table-icon" src={icon} alt="icon" />
            </td>
            
        </>
    )

}

export default TD;