// js file import
import Task from "../Tasks/Tasks";
import Unresolved from "../Unresolved/Unresolved";

// scss file import
import "./footer.scss";

function Footer () {
    return (
        <div className="footer">
            <Unresolved/>
            <Task/>
        </div>
    )
}

export default Footer;