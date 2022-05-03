
function TasksHero(props){
    const {title, group, support, text} = props;
    return(
        <div className="task-hero">
            <div>
                <h2 className="task-title">{title}</h2>
                <p className="task-group">{group} <strong className="task-support">{support}</strong></p>
            </div>
            <p className="task-text">{text}</p>
        </div>
    )
}
export default TasksHero;