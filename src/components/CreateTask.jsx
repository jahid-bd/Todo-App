const CreateTask = ({addNewTask, text, setText}) => {
    
    return(
    <div className="input-group">
        <div className="input-box">
            <input type="text" className="input" placeholder="Type your task" value={text} onChange={(e) => setText(e.target.value)
                }/>
        </div>
        <div className="add-btn">
            <button onClick={(e) => {
                if(text){
                    addNewTask(text)
                    setText('')
                }else{
                    alert('please type a task name')
                }
            }}>Add Task</button>
        </div>
    </div>
    )
}

export default CreateTask;