// js file import
import Logo from "../logo/Logo";

// scss file import
import "./sidebar.scss";

// imgs file import
import Dashboard from "../../Img/img-sidebar/logo.png";
import Overview from "../../Img/img-sidebar/overview.png";
import Tickets from "../../Img/img-sidebar/tickets.png";
import Ideas from "../../Img/img-sidebar/ideas.png";
import Contacts from "../../Img/img-sidebar/contacts.png";
import Agents from "../../Img/img-sidebar/agents.png";
import Articles from "../../Img/img-sidebar/articles.png";
import Settings from "../../Img/img-sidebar/settings.png";
import Subscription from "../../Img/img-sidebar/Vector.png";

function Sidebar () {
    return ( 
        <div className="sidebar">

            <div className="sidebar-top">
                <a className="sidebar-link" href="#link">
                    <img className="sidebar-icon" src={Dashboard} alt="icon logo" />
                    <p className="sidebar-text">Dashboard Kit</p>
                </a>
            </div>

            <ul className="sidebar-list">
                <Logo img={Overview} title="Overview"/>
                <Logo img={Tickets} title="Tickets"/>
                <Logo img={Ideas} title="Ideas"/>
                <Logo img={Contacts} title="Contacts"/>
                <Logo img={Agents} title="Agents"/>
                <Logo img={Articles} title="Articles"/>
                <Logo img={Settings} title="Settings"/>
                <Logo img={Subscription} title="Subscription"/>
            </ul>

        </div>
    )
}

export default Sidebar;