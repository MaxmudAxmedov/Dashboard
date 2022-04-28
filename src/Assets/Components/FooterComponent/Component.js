// js file import
import Item from "../Item/Item";

// scss file import
import "./component.scss";

function Component ({title, group, support, text}) {
    return(
        <div className="task">
            <div className="task-hero">
                <div>
                    <h2 className="task-title">{title}</h2>
                    <p className="task-group">{group} <strong className="task-support">{support}</strong></p>
                </div>
                <p className="task-text">{text}</p>
            </div>
            <ul className="list">
                <Item text="Waiting on Feature Request" number={4238}/>
                <Item text="Awaiting Customer Response" number={1005}/>
                <Item text="Awaiting Developer Fix" number={914}/>
                <Item text="Pending" number={281}/>
            </ul>
        </div>
    )
}

export default Component;