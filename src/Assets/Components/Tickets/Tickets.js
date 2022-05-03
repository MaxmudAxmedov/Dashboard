// import js file
import TD from "../Table/TableTd";

// import scss file
import "./tickets.scss";

// import imgs 
import Tom from "../../Img/img-table/Tom-Cruise.png";
import Matt from "../../Img/img-table/Matt-Damon.png";
import Robert from "../../Img/img-table/Robert-Downey.png";
import Christian from "../../Img/img-table/Christian-Bale.png";
import Henry from "../../Img/img-table/Henry-avil.png";
import Chris from "../../Img/img-table/Chris-Evans.png";
import Sam from "../../Img/img-table/Sam-Smith.png";
import Steve from "../../Img/img-table/Steve-Rogers.png";
import More from "../../Img/img-table/more.png";
function Tickets (){
    return (
        <>
            <main>
                <div className="container">
                    <div className="tickets">
                        <div className="tickets-hero">
                            <h2 className="tickets-title">All tickets</h2>
                            <div className="tickets-sorts">
                                <p className="tickets-sort">Sort</p>
                                <p className="tickets-filter">Filter</p>
                            </div>
                        </div>
                        
                        <div className="tickets-content">
                            <table className="tickets-table">
                                    <thead className="table-thead">
                                        <tr className="table-tr">
                                            <th className="table-title">Ticket details</th>
                                            <th className="table-title">Customer name</th>
                                            <th className="table-title">Date</th>
                                            <th className="table-title">Priority</th>
                                        </tr>
                                    </thead>

                                    <tbody className="table-body">

                                        <tr className="table-row">
                                            <TD 
                                            img={Tom} 
                                                title="Contact Email not Linked" 
                                                condition="Updated 1 day ago"
                                                name="Tom Cruise"
                                                date="on 24.05.2019"
                                                moth="May 26, 2019"
                                                time="6:30 PM"
                                                children="High"
                                                color="#F12B2C"
                                                icon={More}
                                            />
                                            
                                        
                                        </tr>
                                 
                   
                                        <tr className="table-row">
                                            <TD 
                                            img={Matt} 
                                            title="Adding Images to Featured Posts" 
                                            condition="Updated 1 day ago"
                                            name="Matt Damon"
                                            date="on 24.05.2019"
                                            moth="May 26, 2019"
                                            time="8:00 PM"
                                            children="Low"
                                            color="#FEC400"
                                            icon={More}
                                            />

                                        </tr>

                                        <tr className="table-row">
                                            <TD 
                                            img={Robert} 
                                            title="When will I be charged this month?" 
                                            condition="Updated 1 day ago"
                                            name="Robert Downey"
                                            date="on 24.05.2019"
                                            moth="May 26, 2019"
                                            time="7:30 PM"
                                            children="High"
                                            color="#F12B2C"
                                            icon={More}
                                            />
                                        </tr>

                                        <tr className="table-row">
                                            <TD 
                                            img={Christian} 
                                            title="Payment not going through" 
                                            condition="Updated 2 day ago"
                                            name="Christian Bale"
                                            date="on 24.05.2019"
                                            moth="May 25, 2019"
                                            time="5:00 PM"
                                            children="Normal"
                                            color="#29CC97"
                                            icon={More}
                                            />
                                        </tr>

                                        <tr className="table-row">
                                            <TD 
                                            img={Henry} 
                                            title="Unable to add replies" 
                                            condition="Updated 2 day ago"
                                            name="Unable to add replies"
                                            date="on 24.05.2019"
                                            moth="May 25, 2019"
                                            time="4:00 PM"
                                            children="High"
                                            color="#F12B2C"
                                            icon={More}
                                            />
                                        </tr>

                                        <tr className="table-row">
                                            <TD 
                                            img={Chris} 
                                            title="Downtime since last week" 
                                            condition="Updated 3 day ago"
                                            name="Chris Evans"
                                            date="on 23.05.2019"
                                            moth="May 25, 2019"
                                            time="2:00 PM"
                                            children="Normal"
                                            color="#29CC97"
                                            icon={More}
                                            />
                                        </tr>

                                        <tr className="table-row">
                                            <TD 
                                            img={Sam} 
                                            title="Referral Bonus" 
                                            condition="Updated 4 day ago"
                                            name="Sam Smith"
                                            date="on 22.05.2019"
                                            moth="May 25, 2019"
                                            time="11:30 PM"
                                            children="Low"
                                            color="#FEC400"
                                            icon={More}
                                            />
                                        </tr>

                                        <tr className="table-row">
                                            <TD 
                                            img={Steve} 
                                            title="How do I change my password?" 
                                            condition="Updated 6 day ago"
                                            name="Steve Rogers"
                                            date="on 21.05.2019"
                                            moth="May 24, 2019"
                                            time="1:00 PM"
                                            children="Normal"
                                            color="#29CC97"
                                            icon={More}
                                            /> 
                                        </tr>
                                      
                                    </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Tickets;