import TasksHero from "../TaskHero/Task";
import CheckedItem from "../CheckedItem/Item";

import "./task.scss";

function Task () {
    return(
        <div className="task">
            <TasksHero title="Tasks" group="Today:" text="View all"/>

            <div className="task-creat">
                <p className="creat-text">Create new task</p>
                <span className="creat-icon">+</span>
            </div>

            <CheckedItem name="radio" text="Finish ticket update" children="Urgent" color="#FEC400"/>
            <CheckedItem name="radio" text="Create new ticket example" children="New" color="#29CC97"/>
            <CheckedItem name="radio" text="Update ticket report" children="Default" color="#F0F1F7"/>

        </div>
    )
}

export default Task;