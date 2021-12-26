function ShowTasks({tasks,deleteTask, CompleteTask, editTask}){

    return(
        <div className="task-container">
            {tasks.length > 0 ? (
                <ul style={{'padding': 0, 'listStyle': 'none'}}>
                    {tasks.map((task) => (
                        <li key={task.id} >
                            <div className={`task-item ${ task.isCompleted ? "task-item-active" : null}`} >

                                <div className="task-name" style={{'display': 'inline-flex', 'alignItems': 'center'}}>

                                    <span>
                                        <input type="checkbox" onChange={CompleteTask} id={task.id} checked={task.isCompleted && true} className="checkbox"/>
                                    </span>

                                    <span>{task.text}</span>
                                </div>

                                <div className="edit-delete-task">
                                    <span onClick={(e) => {
                                        editTask(task.id)
                                    }}><i className="icofont-edit-alt"></i></span>

                                    <span onClick={(e) => {
                                        deleteTask(task.id)
                                    }}><i className="icofont-ui-delete"></i></span>

                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            ): <p>No task found </p>}
        </div>
    )
}

export default ShowTasks;