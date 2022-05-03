// js file import
import Item from "../Item/Item";
import TasksHero from "../TaskHero/Task";

// scss file import
import "./unresolved.scss";

function Unresolved () {
    return(
        <>
            <div className="task">
                <TasksHero title="Unresolved tickets" group="Group:" support="Support" text="View details"/>
                <ul className="list">
                    <Item text="Waiting on Feature Request" number={4238}/>
                    <Item text="Awaiting Customer Response" number={1005}/>
                    <Item text="Awaiting Developer Fix" number={914}/>
                    <Item text="Pending" number={281}/>
                </ul>
            </div>

        </>

    )
}

export default Unresolved;