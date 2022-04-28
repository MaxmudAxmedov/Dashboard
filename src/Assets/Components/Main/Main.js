// CardMain.js import
import CardMain from "../Card-main/CardMain";

// scss file import
import "./main.scss";

function Main () {
    return (
        <div className="main">

            <div className="main-left">
                <div className="main-info">
                    <h2 className="main-title">Today’s trends</h2>
                    <p className="main-time-text">as of <time datetime="2008-02-14 20:00">25 May 2019, 09:41 PM</time></p>
                </div>
                <div className="main-day">
                    <p>Today</p>      
                    <p>Yesterday</p>
                </div>
            </div>

            <div className="main-right">
                <CardMain text="Resolved" numbers="449"/>
                <CardMain text="Received" numbers="426"/>
                <CardMain text="Average first response time" numbers="33m"/>
                <CardMain text="Average response time" numbers="3h 8m"/>
                <CardMain text="Resolution within SLA" numbers="94%"/>
            </div>

        </div>
    )
}

export default Main;