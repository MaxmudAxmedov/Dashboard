// js file import
import Component from "../FooterComponent/Component";

// scss file import
import "./footer.scss";

function Footer () {
    return (
        <div className="footer">
            <Component title="Unresolved tickets" group="Group:" support="Support" text="View details"/>
            <Component title="Tasks" group="Today" text="View all" />
        </div>
    )
}

export default Footer;